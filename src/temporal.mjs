import { Temporal } from 'proposal-temporal/polyfill/lib/index.mjs';

// 获取当前的时间
const dateTime = Temporal.now.dateTime();
console.log(dateTime.toString());

// unix时间戳
const timeStamp = Temporal.now.absolute();
console.log(timeStamp.getEpochSeconds()); // 精确到秒
console.log(timeStamp.getEpochMilliseconds()); // 精确到毫秒

// Date 与 Temporal 的转换
const legacyDate = new Date('1970-01-01T00:00:00Z');
const absoluteTime = Temporal.Absolute.fromEpochMilliseconds(legacyDate.getTime());

// 时区对象
const tz = Temporal.TimeZone.from('Asia/Shanghai');
console.log(tz.toString());
console.log(tz.name);

// 根据时区输出对应的时间字符串
console.log(absoluteTime.toString('Asia/Shanghai'));
console.log(absoluteTime.toString('+08:00'));
console.log(absoluteTime.toString(tz));

// 比较
const a = Temporal.Date.from({ year: 2020,  month: 1, day: 1 });
const b = Temporal.Date.from({ year: 2020,  month: 2, day: 1 });
const c = Temporal.Date.from({ year: 2020,  month: 3, day: 1 });
console.log([b, a, c].sort(Temporal.Date.compare).map(t => t.toString()));

// 将本地时间转换成其他时区时间
let instant = dateTime.inTimeZone('Asia/Shanghai');
console.log(instant.toString('UTC'));

// 字符串表示两个时区的偏移值

// 两个时区在某个时刻相差的秒数
