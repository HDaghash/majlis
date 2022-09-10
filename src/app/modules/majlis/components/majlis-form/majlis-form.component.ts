import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IMajlisForm } from './types';
import { FormBuilder, Validators } from '@angular/forms';
import { REGEX } from 'app/modules/shared/regex';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MAX_IMAGE_LIMIT, INVALID_IMAGE_SIZE, MOC_UPLOAD_SERVICE } from './config';
import { FormService } from 'app/services/forms.service';

@Component({
  selector: 'app-majlis-form',
  templateUrl: './majlis-form.component.html',
  styleUrls: ['./majlis-form.component.less']
})
export class MajlisFormComponent implements OnInit, OnDestroy {
  @Input() onShow: Subject<IMajlisForm | null> | undefined;
  readonly MOC_UPLOAD_SERVICE = MOC_UPLOAD_SERVICE;
  showForm: boolean = false;
  subscription = new Subscription();
  cities: string[] = [];
  districts: string[] = [];
  isUploading: boolean = false;
  fakeSubscription = new Subscription();

  form = this.formBuilder.group({
    name: [null, [Validators.required, Validators.pattern(REGEX.NOT_ONLY_SPACE)]],
    city: [null, [Validators.required, Validators.pattern(REGEX.NOT_ONLY_SPACE)]],
    district: [null, [Validators.required, Validators.pattern(REGEX.NOT_ONLY_SPACE)]],
    status: [true, [Validators.required, Validators.pattern(REGEX.NOT_ONLY_SPACE)]],
    image: ['', [Validators.required, Validators.pattern(REGEX.NOT_ONLY_SPACE)]]
  });
  constructor(private formBuilder: FormBuilder, private msg: NzMessageService, private formService: FormService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.onShow?.subscribe(() => {
        this.showForm = true;
      })
    );
  }

  beforeUpload = (file: NzUploadFile): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const checkLimit = file.size! / 1024 / 1024 < MAX_IMAGE_LIMIT;
      if (!checkLimit) {
        this.msg.error(INVALID_IMAGE_SIZE);
        observer.complete();
        return;
      }

      observer.next(checkLimit);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  fileChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.isUploading = true;
        break;
      case 'done':
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.isUploading = false;
          this.form.controls.image.setValue(img);
        });
        break;
      case 'error':
        this.msg.error('Upload Api error');
        this.isUploading = false;
        this.form.controls.image.setValue(null);
        break;
    }
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.formService.updateFormValidity(this.form.controls);
    }
  }

  close() {
    this.form.reset();
    this.showForm = false;
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
