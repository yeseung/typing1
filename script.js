var score = 0;
var list1 = ["동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세", "무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세", "남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세", "무궁화 삼천리 화려강산 대한사람, 대한으로 길이 보전하세", "가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세", "무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세", "이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세", "무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세"];
var list2 = ["죽는 날까지 하늘을 우러러 한점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로워했다.", "별을 노래하는 마음으로 모든 죽어가는 것을 사랑해야지 그리고 나한테 주어진 길을 걸어가야겠다.", "오늘밤에도 별이 바람에 스치운다."];
var list3 = ["계절이 지나가는 하늘에는 가을로 가득 차 있습니다.", "나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다.", "가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다.", "별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니,", "어머님, 나는 별 하나에 아름다운 말 한마디씩 불러봅니다.", "소학교때 책상을 같이 했던 아이들의 이름과, 패, 경, 옥 이런 이국소녀들의 이름과 벌써 애기 어머니 된 계집애들의 이름과, 가난한 이웃사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, 프란시스쟘 라이너, 마리아 릴케 이런 시인의 이름을 불러봅니다.", "이네들은 너무나 멀리 있습니다. 별이 아슬히 멀 듯이,", "어머님, 그리고 당신은 멀리 북간도에 계십니다.", "나는 무엇인지 그리워 이 많은 별빛이 나린 언덕 위에 내 이름자를 써보고, 흙으로 덮어 버리었습니다.", "딴은 밤을 새워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다.", "그러나 겨울이 지나고 나의 별에도 봄이 오면 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 게외다."];
var list4 = ["나 보기가 역겨워 가실 때에는 말없이 고이 보내드리오리다.", "영변에 약산 진달래꽃, 아름따다 가실 길에 뿌리오리다.", "가시는 걸음 걸음 놓인 그 꽃을 사뿐히 즈려밟고 가시옵소서.", "나 보기가 역겨워 가실 때에는 죽어도 아니 눈물 흘리오리다."];
var list5 = ["오십천 구비마다 태백의 정기 서리고", "동해의 흰 파도 구비치는 봉황 밑", "산 높고 물도 맑은 대자연속에 새 문화 꾸며내는 과학의 전당", "이름도 좋을세라 삼척고교", "이름도 좋을세라 삼척고교"];
var list100 = ["미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관 최강자들의 싸움이다..", "그 찐따같던 나루토가 맞나? 진짜 나루토는 전설이다.. 진짜 옛날에 맨날 나루토 봤는데 왕같은존재인 호카게되서 세계최강 전설적인 영웅이 된 나루토보면", "진짜 내가 다 감격스럽고 나루토 노래부터 명장면까지 가슴 울리는 장면들이 뇌리에 스치면서 가슴이 웅장해진다..", "그리고 극장판에 카카시앞에 운석 날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤", "개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다라며 바람처럼 사라진 장면은 진짜 나루토 처음부터 본 사람이면 안 울수가 없더라", "진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다..", "지금 20화 보는데 진짜 나루토 세대 나와서 너무 감격스럽고 모두 어엿하게 큰거 보니 내가 다 뭔가 알 수 없는 추억이라 해야되나 그런 감정이 이상하게 얽혀있다..", "시노는 말이 많아진거 같다 좋은 선생이고.. 그리고 보루토 왜 욕하냐 귀여운데 나루토를 보는것 같다 성격도 닮았어", "그리고 보루토에 나루토 사스케 둘이싸워도 이기는 신같은 존재 나온다는게 사실임?? 그리고 인터넷에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐??", "저 적이 보루토에 나오는 신급 괴물임? 나루토 사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격 먹어가지고 와 소리 저절로 나오더라;;", "진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야.. 와 진짜 나루토 사스케가 저렇게 되다니 진짜 눈물나려고했다..", "보루토라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까", "옛날 생각나고 나 중딩때 생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지 감정이 복잡하네..", "아무튼 나루토는 진짜 애니중최거명작임.."];
var leng;
var select_str = list1;
var str = "";
var input_str = "";
var last_word = "";
var flowtime;
var timer;
var tasu = 0;
var ta = 0;
var highest_tasu = 0;
var wrong_list = [];
var jeonghwakdo = 100;
var average = 0;
var average_list = [];
var tagun = 0;
var total_average = 0;

window.onload = $('#text_input').hide();
window.onload = $('.div_time').hide();
window.onload = $('#div_select2').hide();
window.onload = $('#str').hide();

function lst() {
    $('#text_input').val("");
    document.getElementById('text_input').value = "";
    ta = 0;
    tasu = 0;
    tagun = 0;
    average = 0;
    $('#tasu').html("현재타수 : " + tasu + "타");
    str = select_str[score];
    input_str = "";
    console.log("문장 길이 : " + str.length);
    for (var i = 0; i < str.length; i++) {
        input_str += "<strong class='str_' id='word_" + i + "'>" + str.charAt(i) + "</strong>"
    }
    $('#str').html(input_str);
    $('#text_input').val("");
    document.getElementById('text_input').value = "";
}

function input(txt) {
    tagun++;
    /** 오타 처리 **/

    leng = $('#text_input').val().length;
    for (var i = 0; i < str.length - 1; i++) {
        last_word = '#word_' + i;
        if ($('#text_input').val().charAt(i) === "") {
            $(last_word).css('color', 'black');
        } else if ($('#text_input').val().charAt(i) != str.charAt(i)) {
            $(last_word).css('color', 'red');
            wrong_list.push(i);
        } else {
            $(last_word).css('color', 'black');
            if (wrong_list.includes(i)) {
                wrong_list.pop(i);
            }
        }
    }
    wrong_list = wrong_list.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });

    /** 한 문장 끝 처리 **/

    if (str.charAt(str.length - 1) == $('#text_input').val().charAt(str.length - 1) && score < select_str.length - 1) {
        average_list.push(Math.round(average / tagun));
        console.log(Math.round(average / tagun));
        init();
        score++;
        lst();
    } else if (str.charAt(str.length - 1) == $('#text_input').val().charAt(str.length - 1) && score >= select_str.length - 1) {
        for (var i = 0; i < average_list.length; i++) {
            total_average += average_list[i];
        }
        total_average /= average_list.length;
        alert("수고하셨습니다.\n최고타수 : " + highest_tasu + "타\n평균타수 : " + Math.round(total_average) + "타\n정확도 : " + jeonghwakdo + "%입니다.");
        location = "index.html";
    }

    /** 평균 타수 처리 **/

    average += tasu;

    /** 현재 타수 처리 **/

    if (flowtime >= 1) {
        tasu = Math.round((tagun - wrong_list.length * 3) / flowtime * 60);
        $('#tasu').html("현재타수 : " + tasu + "타");
    }

    /** 최고 타수 처리 **/

    if (tasu >= highest_tasu && tasu <= 2000) {
        highest_tasu = tasu;
        $('#highest_tasu').html("최고타수 : " + highest_tasu + "타");
    }

    /** 정확도 처리 **/

    jeonghwakdo = Math.round((str.length - wrong_list.length) / str.length * 100);
    var bar_width = jeonghwakdo / 100 * 75;
    $('#jeonghwakdo').html(jeonghwakdo + "%");
    $('#jeonghwakdo').css('width', bar_width + '%')
}

function init() {
    lst();
    clearInterval(timer);
    timing();
    $('#init').hide();
    $('#select').hide();
    $('#div_select1').hide();
    $('#div_select2').hide();
    $('#text_input').show();
    $('.div_time').show();
    $('#str').show();
}

function timing() {
    flowtime = 0;
    timer = setInterval(function () {
        flowtime++;
        $('#time').html("경과시간 : " + flowtime + "초");
        if (flowtime < 0) {
            clearInterval(timer);
        }
    }, (1000));
}

function select(val) {
    switch (val) {
        case list1:
            $('.list1').html("->");
            $('.list2').html("");
            $('.list3').html("");
            $('.list4').html("");
            $('.list5').html("");
            $('.list100').html("");
            $('.preview').html(list1);
            break;
        case list2:
            $('.list1').html("");
            $('.list2').html("->");
            $('.list3').html("");
            $('.list4').html("");
            $('.list5').html("");
            $('.list100').html("");
            $('.preview').html(list2);
            break;
        case list3:
            $('.list1').html("");
            $('.list2').html("");
            $('.list3').html("->");
            $('.list4').html("");
            $('.list5').html("");
            $('.list100').html("");
            $('.preview').html(list3);
            break;
        case list4:
            $('.list1').html("");
            $('.list2').html("");
            $('.list3').html("");
            $('.list4').html("->");
            $('.list5').html("");
            $('.list100').html("");
            $('.preview').html(list4);
            break;
        case list5:
            $('.list1').html("");
            $('.list2').html("");
            $('.list3').html("");
            $('.list4').html("");
            $('.list5').html("->");
            $('.list100').html("");
            $('.preview').html(list5);
            break;
        case list100:
            $('.list1').html("");
            $('.list2').html("");
            $('.list3').html("");
            $('.list4').html("");
            $('.list5').html("");
            $('.list100').html("->");
            $('.preview').html("");

    }
    select_str = val;
}