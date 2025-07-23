function getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return '';
}
// otherWh=true 适配外部小程序环境投放嘀嗒H5, 转为手机号验证码登录
// 判断环境,是否安卓,苹果,微信,APP内外
// https://wiki.didapinche.com/index.php?title=User-Agent_定义
function getEnv() {
    const { userAgent } = window.navigator; // DidaPinche/8.13.5
    const host = window.location.host;
    const versionRes = userAgent.match(/DidaPinche\/(\d+\.\d+\.\d+)/);
    const option = {
        inApplication: userAgent.indexOf('DidaPinche') !== -1, // 在端上
        inWechat: userAgent.indexOf('MicroMessenger') !== -1 && getQueryString('otherWh') !== 'true', // 在微信内部
        isiPhone:  !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),  //
        isAndroid: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1,
        isAlipay: userAgent.indexOf('Alipay') !== -1,
        isHarmony: userAgent.indexOf('OpenHarmony') !== -1,
        isDingDing: userAgent.indexOf('DingTalk') !== -1,
        isDouYin: userAgent.toLowerCase().indexOf('bytedance') !== -1,
        isEnVlocal: /[0-9(localhost)\.]*:/.test(host),  // 本地
        isEnvTest: /(^[a-zA-Z0-9-]*-test)\.(didapinche|didachuxing|didataxi)\.com/.test(host),
        isEnvECS: /(^[a-zA-Z0-9-]*-(simu|ecs))\.(didapinche|didachuxing|didataxi)\.com/.test(host), // 仿真环境
        curAppVersion: versionRes && versionRes[1] // 版本
    };
    option.isDidaPinche = option.inApplication && userAgent.indexOf('[App]') > -1 // 顺风车
    option.isDidaTaxi = option.inApplication && !option.isDidaPinche // 出租车
    option.isEnvOnline = !option.isEnVlocal && !option.isEnvTest && !option.isEnvECS // 线上环境
    return option;
}

export default getEnv()