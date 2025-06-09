import re

def validateRestaurantData(data):
    name = data.get('name', '').strip()
    if len(name) < 3:
        return 'نام رستوران باید حداقل ۳ کاراکتر باشد.'

    address = data.get('address', '').strip()
    if len(address) < 10:
        return 'آدرس باید حداقل ۱۰ کاراکتر باشد.'

    city = str(data.get('city', '')).strip()
    if not city.isdigit():
        return 'شهر باید عددی معتبر باشد.'

    areas = data.getlist('areas[]')
    if not isinstance(areas, list) or len(areas) == 0:
        return 'حداقل یک منطقه سرویس‌دهی باید مشخص شود.'

    areas_prices = data.getlist('areasPrices[]')
    if not isinstance(areas_prices, list) or len(areas_prices) != len(areas):
        return 'تعداد قیمت‌های مناطق باید با تعداد مناطق برابر باشد.'
    for price in areas_prices:
        try:
            p = float(price)
            if p < 0:
                return 'هزینه ارسال مناطق نباید منفی باشد.'
        except (ValueError, TypeError):
            return 'هزینه‌های مناطق باید عددی باشند.'

    phone = data.get('phoneNumber', '').strip()
    if not re.fullmatch(r'09\d{9}', phone):
        return 'شماره تماس باید ۱۱ رقم و با ۰۹ شروع شود.'

    email = data.get('contactEmail', '').strip()
    if not email or not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
        return 'ایمیل الزامی است و باید معتبر باشد.'

    for field in ['startWorkHour', 'endWorkHour']:
        value = str(data.get(field, '')).strip()
        if not value.isdigit():
            return f'{field} باید عددی بین ۰ تا ۲۳ باشد.'
        intValue = int(value)
        if intValue < 0 or intValue > 23:
            return f'{field} باید عددی بین ۰ تا ۲۳ باشد.'
        data[field] = intValue

    if data['endWorkHour'] <= data['startWorkHour']:
        return 'ساعت پایان باید بعد از ساعت شروع باشد.'

    try:
        delivery_fee = float(data.get('deliveryFeeBase', 0))
        if delivery_fee < 0:
            return 'هزینه پایه ارسال نباید منفی باشد.'
    except (ValueError, TypeError):
        return 'هزینه پایه ارسال باید عددی معتبر باشد.'

    if data.get('freeDeliveryThreshold') is not None:
        try:
            threshold = float(data['freeDeliveryThreshold'])
            if threshold < 0:
                return 'حد آستانه ارسال رایگان نباید منفی باشد.'
        except (ValueError, TypeError):
            return 'حد آستانه ارسال رایگان باید عددی باشد.'

    iban = data.get('bankAccountNumber', '').strip()
    if not re.fullmatch(r'\d{24}', iban):
        return 'شماره حساب بانکی باید دقیقاً ۲۴ رقم باشد.'

    return None
