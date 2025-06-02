
def authHtml(title: str, code: int):
    return f"""
    <html lang="fa">
      <body style="margin: 0; padding: 0; background: #f0f2f5; font-family: 'Segoe UI', Tahoma, sans-serif; direction: rtl;">
        <table align="center" cellpadding="0" cellspacing="0" width="100%" style="padding: 40px 0;">
          <tr>
            <td>
              <table align="center" cellpadding="0" cellspacing="0" style="max-width: 600px; background: linear-gradient(to bottom right, #ffffff, #f9fbfd); border-radius: 20px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.1);">
                <tr>
                  <td style="padding: 40px 50px;">
                    <h1 style="margin: 0; font-size: 22px; color: #1e1e2f; font-weight: 700; text-align: center;">
                      به <span style="color: #0077ff;">elite bite</span> خوش آمدید 👋
                    </h1>
                    <p style="font-size: 16px; color: #4b4b4b; line-height: 2; margin-top: 40px;">
                    {title}
                    </p>
                    <div style="margin: 30px 0; text-align: center;">
                      <span style="
                        display: inline-block;
                        padding: 16px 36px;
                        font-size: 30px;
                        font-weight: bold;
                        letter-spacing: 6px;
                        color: #ffffff;
                        background: linear-gradient(135deg, #0077ff, #00c6ff);
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(0, 119, 255, 0.3);
                      ">
                        {code}
                      </span>
                    </div>
                    <p style="font-size: 15px; color: #666; line-height: 1.8;">
                      لطفاً این کد را فقط شما استفاده کنید و با کسی به اشتراک نگذارید. این کد ظرف دو دقیقه منقضی می‌شود.
                    </p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;" />
                    <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">
                      تمامی حقوق محفوظ است. © 2025 ELITE BITE
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    """