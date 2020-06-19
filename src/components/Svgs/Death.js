import React from "react";
import { SvgXml } from "react-native-svg";

export default ({ width, height }) => {
  const xml = `
   <svg height="512" viewBox="0 0 58 58" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="037---Pirate-Grave" fill-rule="nonzero"><path id="Shape" d="m47 18v31.33c-.6270624-.2179219-1.2861499-.3294598-1.95-.33-.5514218-.0000247-1.1001144.0773982-1.63.23-.3422272.0920519-.7073416-.0117174-.95-.27-1.138591-1.2485439-2.7502511-1.9599975-4.44-1.96-.7309243.000888-1.4557534.132983-2.14.39-.346307.1235427-.7326435.042412-1-.21-3.3887757-2.9066259-8.3912243-2.9066259-11.78 0-.2673565.252412-.653693.3335427-1 .21-.6842466-.257017-1.4090757-.389112-2.14-.39-1.6897489.0000025-3.301409.7114561-4.44 1.96-.2426584.2582826-.6077728.3620519-.95.27-.5298856-.1526018-1.0785782-.2300247-1.63-.23-.6638501.0005402-1.3229376.1120781-1.95.33v-31.33c0-9.9411255 8.0588745-18 18-18s18 8.0588745 18 18z" fill="#94a4a4"/><path id="Shape" d="m56.99 58h-55.98c-.2927923.0038536-.57227009-.1221058-.7633096-.3440204-.19103952-.2219146-.27403982-.5170156-.2266904-.8059796.55957258-2.8202344 3.03478844-4.851503 5.91-4.85.43373707.0009869.86614951.0479154 1.29.14h.01c.20465011-.6517014.5303387-1.258975.96-1.79.71168626-.9411376 1.69116294-1.6452454 2.81-2.02.6270624-.2179219 1.2861499-.3294598 1.95-.33.5514218-.0000247 1.1001144.0773982 1.63.23.3422272.0920519.7073416-.0117174.95-.27 1.138591-1.2485439 2.7502511-1.9599975 4.44-1.96.7309243.000888 1.4557534.132983 2.14.39.346307.1235427.7326435.042412 1-.21 3.3887757-2.9066259 8.3912243-2.9066259 11.78 0 .2673565.252412.653693.3335427 1 .21.6842466-.257017 1.4090757-.389112 2.14-.39 1.6897489.0000025 3.301409.7114561 4.44 1.96.2426584.2582826.6077728.3620519.95.27.5298856-.1526018 1.0785782-.2300247 1.63-.23 1.8644646.0082959 3.6222908.8706257 4.77 2.34v.01c.422888.5339288.7448247 1.1405254.95 1.79h.01c.4238505-.0920846.8562629-.1390131 1.29-.14 2.8752116-.001503 5.3504274 2.0297656 5.91 4.85.0473494.288964-.0356509.584065-.2266904.8059796s-.4705173.347874-.7633096.3440204z" fill="#805333"/><g fill="#603e26"><path id="Shape" d="m26 50c-.4304304 0-.8125693-.2754301-.9486833-.6837722-.136114-.4083422.004339-.8579696.3486833-1.1162278 2.1430373-1.5706183 5.0569627-1.5706183 7.2 0 .2858125.2143593.4355548.5649147.3928204.9196153-.0427344.3547005-.2714532.6596588-.6000001.8-.3285468.1403412-.7070078.0947441-.9928203-.1196153-1.4289006-1.0464398-3.3710994-1.0464398-4.8 0-.1728221.1303443-.3835357.2005822-.6.2z"/><path id="Shape" d="m17 53c-.414101.0002935-.7855441-.2546721-.9341235-.6412001-.1485793-.386528-.0435537-.8246457.2641235-1.1017999 1.7928189-1.6450443 4.5461811-1.6450443 6.339 0 .2794615.2352488.4084119.6041616.336357.96228-.072055.3581185-.3336485.6484522-.6823463.7573127-.3486978.1088604-.7290085.0189238-.9920107-.2345927-1.0270491-.9713314-2.6339509-.9713314-3.661 0-.1836971.1659711-.4224298.257901-.67.258z"/><path id="Shape" d="m36 53c-.414101.0002935-.7855441-.2546721-.9341235-.6412001-.1485793-.386528-.0435537-.8246457.2641235-1.1017999 1.7928189-1.6450443 4.5461811-1.6450443 6.339 0 .2794615.2352488.4084119.6041616.336357.96228-.072055.3581185-.3336485.6484522-.6823463.7573127-.3486978.1088604-.7290085.0189238-.9920107-.2345927-1.0270491-.9713314-2.6339509-.9713314-3.661 0-.1836971.1659711-.4224298.257901-.67.258z"/><path id="Shape" d="m27 55c-.414101.0002935-.7855441-.2546721-.9341235-.6412001-.1485793-.386528-.0435537-.8246457.2641235-1.1017999 1.7928189-1.6450443 4.5461811-1.6450443 6.339 0 .2794615.2352488.4084119.6041616.336357.96228-.072055.3581185-.3336485.6484522-.6823463.7573127-.3486978.1088604-.7290085.0189238-.9920107-.2345927-1.0270491-.9713314-2.6339509-.9713314-3.661 0-.1836971.1659711-.4224298.257901-.67.258z"/><path id="Shape" d="m10.74 53.22c-.1786196.1991827-.4300562.3178616-.6973596.3291561-.26730344.0112945-.52785514-.0857511-.7226404-.2691561-.60067368-.5343267-1.31555164-.9242602-2.09-1.14.20465011-.6517014.5303387-1.258975.96-1.79.92057776.3124298 1.76782022.8092065 2.49 1.46.4016101.37479.4283189 1.0024471.06 1.41z"/><path id="Shape" d="m50.77 52.14-.58.2c-.555468.2205687-1.0668918.5389385-1.51.94-.1947853.183405-.455337.2804506-.7226404.2691561s-.51874-.1299734-.6973596-.3291561c-.3683189-.4075529-.3416101-1.03521.06-1.41.7244341-.6529036 1.5753907-1.1498622 2.5-1.46.422888.5339288.7448247 1.1405254.95 1.79z"/></g><path id="Shape" d="m34.93 32.9c.0490593.1961537.0725871.3978208.07.6 0 1.3807119-1.1192881 2.5-2.5 2.5-.09 0-.18-.01-.27-.01s-.16-.03-.23-.04v1.05c0 .5522847-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1v-1.05c-.07.01-.15.03-.23.04s-.18.01-.27.01c-1.3807119 0-2.5-1.1192881-2.5-2.5-.0025871-.2021792.0209407-.4038463.07-.6.1027959-.4191372.3170243-.802675.62-1.11-.453767-.8599349-.6906305-1.8176872-.69-2.79-.0016621-.0901157.0016763-.1802542.01-.27.050888-1.3855702.5932502-2.7077994 1.53-3.73 1.1333619-1.2722703 2.7561277-1.9999497 4.46-1.9999497s3.3266381.7276794 4.46 1.9999497c.9367498 1.0222006 1.479112 2.3444298 1.53 3.73.0083237.0897458.0116621.1798843.01.27.0006305.9723128-.236233 1.9300651-.69 2.79.3029757.307325.5172041.6908628.62 1.11z" fill="#f4eec9"/><circle id="Oval" cx="27" cy="29" fill="#603e26" r="1"/><circle id="Oval" cx="31" cy="29" fill="#603e26" r="1"/><path id="Shape" d="m30 34c-.2651948-.0000566-.5195073-.1054506-.707-.293l-.293-.293-.293.293c-.3923789.3789722-1.0160848.3735524-1.4018186-.0121814s-.3911536-1.0094397-.0121814-1.4018186l1-1c.3904999-.3903819 1.0235001-.3903819 1.414 0l1 1c.2859079.2859943.3714219.7160366.216678 1.0896546-.1547439.3736179-.5192821.6172591-.923678.6173454z" fill="#603e26"/><path id="Shape" d="m24.54 25c-.9367498 1.0222006-1.479112 2.3444298-1.53 3.73l-3.6-1.98c-.8288039.9837153-2.2688035 1.1779589-3.3286318.4490037-1.0598284-.7289551-1.39353-2.1431589-.7713682-3.2690037.2561797-.4799563.6691253-.8576074 1.17-1.07-.0841323-.5355436.0107728-1.083884.27-1.56.6177989-1.1233166 1.9851808-1.5972643 3.1656443-1.0972427 1.1804635.5000217 1.7913863 1.8119413 1.4143557 3.0372427z" fill="#f8e9af"/><path id="Shape" d="m41.7 27.32c-1.0404472.5729042-2.3403598.3346566-3.11-.57l-3.6 1.98c-.050888-1.3855702-.5932502-2.7077994-1.53-3.73l3.21-1.76c-.3770306-1.2253014.2338922-2.537221 1.4143557-3.0372427 1.1804635-.5000216 2.5478454-.0260739 3.1656443 1.0972427.2592272.476116.3541323 1.0244564.27 1.56.5008747.2123926.9138203.5900437 1.17 1.07.3202301.5804151.395803 1.2645625.2099763 1.900878-.1858266.6363156-.6177116 1.1722674-1.1999763 1.489122z" fill="#f8e9af"/><path id="Shape" d="m21.33 38.42c.3770306 1.2253014-.2338922 2.537221-1.4143557 3.0372427-1.1804635.5000216-2.5478454.0260739-3.1656443-1.0972427-.2592272-.476116-.3541323-1.0244564-.27-1.56-.498831-.2155627-.910845-.5923618-1.17-1.07-.6221618-1.1258448-.2884602-2.5400486.7713682-3.2690037 1.0598283-.7289552 2.4998279-.5347116 3.3286318.4490037l3.66-2.01c-.0490593.1961537-.0725871.3978208-.07.6 0 1.3807119 1.1192881 2.5 2.5 2.5.09 0 .18-.01.27-.01z" fill="#f8e9af"/><path id="Shape" d="m42.69 37.73c-.259155.4776382-.671169.8544373-1.17 1.07.0841323.5355436-.0107728 1.083884-.27 1.56-.6177989 1.1233166-1.9851808 1.5972643-3.1656443 1.0972427-1.1804635-.5000217-1.7913863-1.8119413-1.4143557-3.0372427l-4.44-2.43c.09 0 .18.01.27.01.6630412 0 1.298926-.2633921 1.767767-.732233.4688409-.468841.732233-1.1047258.732233-1.767767.0025871-.2021792-.0209407-.4038463-.07-.6l3.66 2.01c.8288039-.9837153 2.2688035-1.1779589 3.3286318-.4490037 1.0598284.7289551 1.39353 2.1431589.7713682 3.2690037z" fill="#f8e9af"/><path id="Shape" d="m25 10c0-1.65685425-1.3431458-3-3-3h-1c-1.1045695 0-2 .8954305-2 2v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3h.382l1.723 3.447c.1596977.3197527.4778505.5300187.8346134.5515928.3567628.021574.6979349-.1488214.895-.4470001.1970651-.2981786.2200843-.67884.0603866-.9985927l-1.466-2.932c.9644325-.5197345 1.5672451-1.5254454 1.571-2.621zm-4-1h1c.5522847 0 1 .44771525 1 1 0 .5522847-.4477153 1-1 1h-1z" fill="#464f5d"/><path id="Shape" d="m36 7h-1c-1.1045695 0-2 .8954305-2 2v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3h1c1.6568542 0 2.9999999-1.3431458 2.9999999-3 0-1.65685422-1.3431457-2.99999997-2.9999999-3zm0 4h-1v-2h1c.5522847 0 1 .44771525 1 1 0 .5522847-.4477153 1-1 1z" fill="#464f5d"/><path id="Shape" d="m29 7c-.5522847 0-1 .44771525-1 1v8c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-8c0-.55228475-.4477153-1-1-1z" fill="#464f5d"/><path id="Shape" d="m24.54 25c-.9367498 1.0222006-1.479112 2.3444298-1.53 3.73l-1.9-1.04c.2137733-1.3483195.7833545-2.6152061 1.65-3.67z" fill="#cab191"/><path id="Shape" d="m36.89 27.69-1.9 1.04c-.050888-1.3855702-.5932502-2.7077994-1.53-3.73l1.79-.98c.8615236 1.0568226 1.4274192 2.3231866 1.64 3.67z" fill="#cab191"/><path id="Shape" d="m25.77 35.99-2.54 1.39c-1.2213932-.7112093-2.0365104-1.9561156-2.2-3.36l2.04-1.12c-.0490593.1961537-.0725871.3978208-.07.6 0 1.3807119 1.1192881 2.5 2.5 2.5.09 0 .18-.01.27-.01z" fill="#cab191"/><path id="Shape" d="m36.97 34.02c-.1634896 1.4038844-.9786068 2.6487907-2.2 3.36l-2.54-1.39c.09 0 .18.01.27.01 1.3807119 0 2.5-1.1192881 2.5-2.5.0025871-.2021792-.0209407-.4038463-.07-.6z" fill="#cab191"/></g></g></svg>
  `;

  return <SvgXml xml={xml} width={width} height={height} />;
};
