/**
 * Дефолтное время кручения 22 сек.
 *
 * Длина кручения 22 сек:
 * 'video.webm'
 *
 * Длина кручения 22 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4]
 *
 * Длина кручения 30 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4, 30]
 *
 * Выберется случайное видео из списка, рандомится только при перезапуске всего списка видосов:
 * () => p5Wheel.random([
 *    ['video.webm', 4, 30],
 *    ['video.webm', 45],
 * ]),
 */
const videosFree = [
    ['videos/Бегу по качалке.mp4', 0, 16],
    ['videos/01.mp4', 0, 22],
    ['videos/04.mp4', 0, 22],
    ['videos/06.mp4', 0, 22],
    ['videos/08.mp4', 0, 24],
    ['videos/09.mp4', 0, 24],
    ['videos/12.mp4', 0, 24],
    ['videos/18.mp4', 0, 23],
    ['videos/19.mp4', 0, 23],
    ['videos/16.mp4', 0, 23],
    ['videos/karta.mp4', 0, 24],
    ['videos/Peter Parker edit Lordly.mp4', 0, 20],
    ['videos/U GOT Яйца.mp4', 0, 30],
    ['videos/flopa.mp4', 0, 24],
    ['videos/JOJO'S BIZARRE MAKEUP TUTORIAL.mp4', 3, 27],
    ['videos/Квас Закамский это хит.mp4', 0, 14],
    ['videos/gavno.mp4', 0, 30],
    ['videos/dj-eban2.mp4', 0, 26],
    ['videos/Music make you lose control triangle.mp4', 0, 26],
    ['videos/hey.mp4', 0, 25],
    ['videos/tarakan.mp4', 0, 25],
    ['videos/mel.mp4', 0, 20],
    ['videos/PeepoClown ft. Segall - bass boosted HONK.mp4', 0, 25],
    ['videos/turboremix.mp4', 0, 32],
    ['videos/The less I know the better & Sexy back (Meme edit).mp4', 0, 34],
    ['videos/mine.mp4', 0, 31],
    ['videos/petecat.mp4', 0, 27],
    ['videos/billy.mp4', 0, 24],
    ['videos/riba.mp4', 0, 24],
    ['videos/pelmen.mp4', 0, 32],
    ['videos/ching.mp4', 0, 28],
    ['videos/forsenBounce.mp4', 0, 29],
    ['videos/mel pops.mp4', 0, 27],
    ['videos/anime01.mp4', 0, 27],
    ['videos/cake.mp4', 0, 30],
    ['videos/Не Твое Дело - Я буду рядом.mp4', 0, 28],
    ['videos/flexair5.mp4', 0, 26],
    ['videos/ChinChinDe.mp4', 0, 29],
    ['videos/Road.mp4', 0, 28],
    ['videos/ritorraria.mp4', 0, 33],
    ['videos/liz0N - Пятница (песенка про Minecraft).mp4', 30, 62],
    ['videos/jojo.mp4', 0, 25],
    ['videos/Пузантос - Бумаги [Morrowind].mp4', 18, 44],
    ['videos/taburet.mp4', 0, 28],
    ['videos/темоинэгу.mp4', 0, 31],
    ['videos/kal.mp4', 0, 29],
    ['videos/umad.mp4', 0, 30],
    ['videos/pontifik.mp4', 0, 34],
    ['videos/butirka.mp4', 0, 22],
    ['videos/bean.mp4', 0, 38]
];