interface BankInfo {
    name: string;
    color: string;
    logo: string;
}

const bankPrefixMap: { [key: string]: BankInfo } = {
    "627412": { name: "اقتصاد نوین", color: "from-blue-500 to-blue-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">اقتصاد نوین</text></svg>` },
    "207177": { name: "توسعه صادرات ایران", color: "from-green-500 to-green-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه صادرات</text></svg>` },
    "627381": { name: "انصار", color: "from-red-500 to-red-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">انصار</text></svg>` },
    "502229": { name: "پاسارگاد", color: "from-purple-500 to-purple-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پاسارگاد</text></svg>` },
    "505785": { name: "ایران زمین", color: "from-yellow-500 to-yellow-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ایptن زمین</text></svg>` },
    "502806": { name: "شهر", color: "from-teal-500 to-teal-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">شهر</text></svg>` },
    "622106": { name: "پارسیان", color: "from-pink-500 to-pink-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پارسیان</text></svg>` },
    "502908": { name: "توسعه تعاون", color: "from-indigo-500 to-indigo-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه تعاون</text></svg>` },
    "639194": { name: "پارسیان", color: "from-pink-500 to-pink-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پارسیان</text></svg>` },
    "502910": { name: "کارآفرین", color: "from-orange-500 to-orange-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">کارآفرین</text></svg>` },
    "627884": { name: "پارسیان", color: "from-pink-500 to-pink-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پارسیان</text></svg>` },
    "502938": { name: "دی", color: "from-gray-500 to-gray-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">دی</text></svg>` },
    "639347": { name: "پاسارگاد", color: "from-purple-500 to-purple-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پاسارگاد</text></svg>` },
    "505416": { name: "گردشگری", color: "from-cyan-500 to-cyan-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">گردشگری</text></svg>` },
    "505801": { name: "موسسه اعتباری کوثر (سپه)", color: "from-blue-600 to-blue-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">کوثر</text></svg>` },
    "589210": { name: "سپه", color: "from-green-600 to-green-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سپه</text></svg>` },
    "589463": { name: "رفاه کارگران", color: "from-red-600 to-red-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">رفاه</text></svg>` },
    "603769": { name: "صادرات ایران", color: "from-purple-600 to-purple-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">صادرات</text></svg>` },
    "627648": { name: "توسعه صادرات ایران", color: "from-green-500 to-green-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه صادرات</text></svg>` },
    "603770": { name: "کشاورزی", color: "from-yellow-600 to-yellow-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">کشاورزی</text></svg>` },
    "636949": { name: "حکمت ایرانیان (سپه)", color: "from-blue-700 to-blue-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">حکمت</text></svg>` },
    "603799": { name: "ملی ایران", color: "from-teal-600 to-teal-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ملی</text></svg>` },
    "606373": { name: "قرض الحسنه مهر ایران", color: "from-pink-600 to-pink-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مهر ایران</text></svg>` },
    "610433": { name: "ملت", color: "from-indigo-600 to-indigo-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ملت</text></svg>` },
    "621986": { name: "سامان", color: "from-orange-600 to-orange-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سامان</text></svg>` },
    "639607": { name: "سرمایه", color: "from-gray-600 to-gray-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سرمایه</text></svg>` },
    "627353": { name: "تجارت", color: "from-cyan-600 to-cyan-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">تجارت</text></svg>` },
    "639346": { name: "سینا", color: "from-red-700 to-red-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سینا</text></svg>` },
    "627961": { name: "صنعت و معدن", color: "from-purple-700 to-purple-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">صنعت و معدن</text></svg>` },
    "627760": { name: "پست ایران", color: "from-yellow-700 to-yellow-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پست ایران</text></svg>` },
    "639599": { name: "قوامین", color: "from-green-700 to-green-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">قوامین</text></svg>` },
    "628023": { name: "مسکن", color: "from-blue-800 to-blue-600", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مسکن</text></svg>` },
    "628157": { name: "موسسه اعتباری توسعه", color: "from-teal-700 to-teal-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه</text></svg>` },
    "636214": { name: "آینده", color: "from-pink-700 to-pink-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">آینده</text></svg>` },
    "636795": { name: "مرکزی", color: "from-gray-700 to-gray-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مرکزی</text></svg>` },
    "639370": { name: "مهر اقتصاد (سپه)", color: "from-indigo-700 to-indigo-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مهر اقتصاد</text></svg>` },
    "991975": { name: "ملت", color: "from-indigo-600 to-indigo-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ملت</text></svg>` },
};

export { bankPrefixMap };
export type { BankInfo };