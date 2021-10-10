function rand(n) {
    return parseInt(n * Math.random());
}
const says = {
    '一言 (hitokoto)': [
        '船马上就要开了，这次就不玩了',
        '希望会不断前进！',
        '用谎言引出真相！',
        '这个世界是王马小吉的！',
        '',
        '如果你在刷一言的时候刷出过空串，那并不代表 DPair 写挂了，而是 DPair 确实留了一个空串。',
        '我们的未来，由我们自己决定！',
        '律师越是到危难的时候越是要笑',
        '加载一言时发生错误',
        '“我觉得佛光最主要普照在我们高一身上。”',
        'Never gonna give you up, never gonna let you down.\nNever gonna run around and desert you.',
        'Never gonna make you cry, never gonna say goodbye.\nNever gonna tell a lie and hurt you.',
        '“春游我们是有机会去的。”',
        '王泥喜法介，没问题的！',
        'Let\'s do this!',
        '異議あり！',
        '異議あり！',
        '異議あり！',
        '異議あり！',
        '希望！希望！希望！希望！希望！希望！希望！希望！',
        '希望は前に進むだ！',
        'You get lost...',
        'You get lost...again...',
        'You backed...again...',
        'Knives to meet you. =)',
        'It\'s a beautiful day outside.',
        'Birds are singing, flowers are blooming.',
        'On days like this, kids like you...',
        'SHOULD BE BURNING IN HELL.',
        'Get dunked on!!!',
        'You\'ll die where you stand.',
        'You get filled with determination.',
        '比地狱还要黑的黑暗',
        '斯马拉乃。',
        '斯巴拉西哟！',
        'The game is afoot.',
        'Elementary!',
        'I am iron man.',
        '“这个算法是 O(nlogn) 的！”',
        '“凭什么点分比边分多一只log？”',
        '你下个月的工资评定可有好戏看了',
    ],
    '马语 (analects)': [
        '“搞得好像我拿不了 IOI 金牌一样”',
        '“我发现你们这些人断章取义，不懂得语言艺术”',
        '“一个好的 OI 选手，目标一定是要拿到 IOI 金牌。” ',
        '“你要用 AK 证明自己行，那太逊了。我用 AK 证明我自己不行。” ',
        '“我疯掉了也比你强。” ',
        '“我发现你这个人理解有一些缺陷。” ',
        '“我除了 AK 一无是处。” ',
        '“我 AK 了，你爆零了。” ',
        '“你这个脑力咧，要修。” ',
        '“我听写 AK，至今没有错过。” ',
        '“我边看春晚边 AK” ',
        '“人不能不 AK” ',
        '“人最需要的是爆零的勇气” ',
        '“我这 n^2 怎么这么慢啊，这 n 才两百万啊” ',
        '“呀！呀是你说哒？” ',
        '“呀不是你讲的！” ',
        '“你 AK 了，我不满意！” ',
        '“诶历史的进程总是由我掌控” ',
        '“啊你怎么跟个屎尿泡一样的” ',
        '“你反正怎么样都 D 不过我，是不是” ',
        '“我恨不得一桶水把你泼到屎坑里” ',
        '“我在！你就能 AK！” ',
        '“我姓马名 D，简称 AK！” ',
        '“我说这不好，你不能反驳！” ',
        '“啊，你怎么能敲打我哒！” ',
        '“这你不会也加进去吧，啊！” ',
        '“手指头啊，砍下来为止！” ',
        '“吔，你会卡常哒！” ',
        '“诶，我发神经勒，发神经勒！” ',
        '“我一天切 1e10 个题” ',
        '“我四个毛病：第一个，天天 AK！第二个，天天暴零！第三个，天天菲克！第四个，不允许别人菲克！” ',
        '“连 tourist 都做不出来的题，我随手就切掉了！诶我就是这么自信” ',
        '“我能证明黎曼猜想，但我不发表！” ',
        '“天天爆零还在那边叫，真是不行。” ',
        '“你怎么像一个垃圾一样。” ',
        '“我跟你讲，这一只 log 是跑不过两只 log 的。” ',
        '“D 人的本质就是要被 D。” ',
        '“人天生就是要被 D 的，所以要学会 D 人。” ',
        '“我无事不晓，只会 AK，快记下来！” ',
        '“自从联合省选之后我就变成了图论鬼才。” ',
        '“该 F 的终归是会 F 的。” ',
        '“垃圾的 DPair 还敢在那边发言？” ',
        '“我脚朝天也比你头朝地强！” ',
        '“人不 D 就不能生存！” ',
        '“啊，你到厕（二声）所里去给我反省去！” ',
        '“你看到我不 D 人的样子也是 D 人” ',
        '“你一点 AK 的气概都没有” ',
        '“垃圾虫子不要在这里烦我”',
        '“来，我 AK 一下 ARC”',
        '“我说你还是闭上你的死嘴巴吧，嗯？”',
        '“不要以为你张了个嘴巴就是 DPair 了”',
        '“只有我有 AK 的权利”',
        '“一个 simple 一个 naive 叫什么叫”',
        '“今天爆零的是你，明天爆零的还是你！”',
        '“我怎么 Rank 1 了？”',
        '“那卷王只能形容我，不能形容别人”',
        '“小丑还吃纸？嘿嘿。”',
        '“我可以猜想答案。”',
        '“欸这样说话是对我 MYY 的不尊重。”',
        '“IOI 金牌要制哒？ IOI 金牌我发！”',
        '“下雨归下雨，光还是要为我 MYY 闪耀！”',
        '“你难道不知道我有最高钦定权吗”',
        '“这个T3怎么和CF那道3500的傻逼题一样啊”',
        '“DPair 是小丑，我是大丑，我比他大，嘿嘿！”',
        '两个 D 人怪， D 不过我！',
        '我耳朵和眼睛都长在头上！厉害吧！',
        'hhz 这个机房皇帝有什么了不起的，我一巴掌把他拍成肉饼蒸蛋！',
        '一个 hhz 不够我打，要两个嘿嘿！',
    ],
    '游戏王 (yu-gi-oh!)': [
        '意☆义☆不☆明的卡牌',
        '我……是不会输的，我和他……还有约定……',
        '王只有一个！那就是我！',
        '王的决斗必须是娱乐！',
        '我要向你挥下名为完全败北的鞭子！',
        '堕落！萌死他卡多！',
        '游星，你是我们的希望！加速同调连光都能超越！',
        '顶级明镜止水之心！',
        '真正的决斗者，连抽卡都可以由自己决定！',
        '在黑暗中闪耀的银河啊，化为希望之光寄宿于吾仆之身！光之化身，在此降临！',
        "翻涌的银河，现在在此化作怒涛之光现出身姿吧！",
        '这不是怪兽，卡密哒！',
        '魔导战士·破坏者，萃☆香☆攻☆击！',
        '我将一切，都赌在这次抽卡上！',
        '闪光抽卡！',
        '场上 4 星的怪兽有 2 只，要上了游马！',
        '解放你场上的两只怪兽，送你个 8 星大宝贝！',
        '英雄也有适合英雄战斗的舞台！',
        '新宇宙有了新的英雄！他的名字是 E·HERO NEOS！',
        '天空雷鸣混沌之时，集连锁中之远古魔导书，其力可至无限!',
        '在光与暗交织之时，开始方尖塔的仪式。其到来之时，灼热之疾风必吹荒大地，生者必皆成尸骸！',
        '集いし愿いが新たに辉く星となる。光差す道となれ！シンクロ召唤！飞翔せよ、スターダスト·ドラゴン！',
        '王者の鼓动、今ここに列を成す！天地鸣动の力を见るがいい！シンクロ召唤！我が魂、レッド·デーモンズ·ドラゴン！',
        '集いし星の辉きが、新たな奇迹を照らし出す。光差す道となれ！シンクロ召唤！光来せよ、セイヴァー·スター·ドラゴン！',
        'HA☆NA☆SE！',
        '全☆速☆前☆进☆da',
        '黑色的疾风，让隐藏的感情呈现在你的翅膀上吧！',
        '冰冷的火焰将吞噬世上的一切，漆黑的花朵，绽放吧！',
        '神圣的守护之光，在此彼此交融成为永恒的生命！',
        '为了守护世界的和平，结合勇气与力量！',
        '这就是，为了活下去的我的挣扎！',
        '我说过的，决斗在这一回合就会结束，我，赢了！',
        '觉悟吧，你这虫混蛋！',
        '你的生命已如风中残烛',
        '所列瓦多卡纳',
        '一飞冲天啊，我！',
        '繁星流动的痕迹纺织出所有的心愿，与希望一起充满这个世界吧！',
        '王者的鼓动，现在降临于此，看这天地鸣动的力量吧！',
        '聚集的祈愿化作新生的闪耀之星，成为光明闪耀的道路吧！',
        '聚集的星之光辉将照亮新的奇迹，成为光明闪耀的道路吧！',
        '从现在开始，这里将成为决斗都市。',
        '这就是进化之后最强龙族的姿态！',
        '破坏神欧贝利斯克，伴随着究极的力量降临于此，成为我绝对的仆人吧！',
        '从现在开始，这里将成为决斗都市。',
        '这就是，进化之后最强龙族的姿态！',
        '破坏神欧贝利斯克，伴随着究极的力量降临于此，成为我绝对的仆人吧！',
    ]

}
function drawSaying() {
    let sayingtype = rand(Object.keys(says).length)
    let sayingtitle = Object.keys(says)[sayingtype]
    document.getElementById("sayingtype").innerText = sayingtitle
    document.getElementById("saying").innerText = says[sayingtitle][rand(says[sayingtitle].length)]
}