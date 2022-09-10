export const MAX_IMAGE_LIMIT = 10;
export const MOC_UPLOAD_SERVICE = 'https://upload.free.beeceptor.com';

//TODO: Temp until we have localization
export const INVALID_IMAGE = 'صيغة الصورة غير مقبولة';
export const INVALID_IMAGE_SIZE = 'حجم الصورة يجب ان لا زيد عن 2MB';

export const CITIES = [
  { id: 1, name: 'دبي' },
  { id: 2, name: 'ابو ظبي' },
  { id: 3, name: 'الشارقة' }
];

export const DISTRICTS = [
  {
    cityId: 1,
    items: [
      { id: 4, name: 'مارينا' },
      { id: 5, name: 'نخلة جميرا' },
      { id: 6, name: 'الخليج التجاري' }
    ]
  },
  {
    cityId: 2,
    items: [
      { id: 7, name: 'الظفرة' },
      { id: 8, name: 'العين' },
      { id: 9, name: 'مدينة ابو ظبي' }
    ]
  },
  {
    cityId: 3,
    items: [{ id: 10, name: 'شارع البنوك' }]
  }
];
