const week = ["日", "月", "火", "水", "木", "金", "土"];

// 今日の日付
var today = new Date();

// 表示用の日付
var showDate = new Date();

// 表示された時
window.onload = function () {
  // カレンダーの表示（引数には表示用の日付を設定）
  showCalendar(showDate);
};

/**
 * カレンダーの表示
 */
function showCalendar(date) {
  // 年
  var year = date.getFullYear();
  // 月
  var month = date.getMonth()+1;
  
  // カレンダーテーブルを作成する（HTMLが返却される）
  var calendarTable = createCalendarTable(year, month);

  document.getElementById("header").innerText = year + "/" + month;
  
  // カレンダー表示部分に埋め込み
  document.getElementById("body").innerHTML = calendarTable;
}

/**
 * カレンダーテーブルの作成
 */
function createCalendarTable(year, month){
    var daycount = 1;
    //何曜日から始まる
    var startdate =new Date(year,month-1,1)
    var startday=startdate.getDay();
    //何日まであるか
    var enddate = new Date(year,month,0)
    var endday=enddate.getDate();
    var html = "";
    html = "<table  border=1>" + "<tr>";
    var array=["日","月","火","水","木","金","土","日"]
    for(var i=0;i<7;i++){
        if(i==0){
            html += "<th bgcolor=lightgray style=color:red>" + array[i] +"</th>";
        }else if(i==6){
            html += "<th bgcolor=lightgray style=color:blue>" + array[i] +"</th>";
        }else{
            html += "<th bgcolor=lightgray>" + array[i] +"</th>";
        }
    }
    html += "</tr>";
    for(var j=0;j<6;j++){
        html += "<tr>";
        for(var i=0;i<7;i++){
            if(j==0 && i<startday){
                if(i==0){
                    html += "<td bgcolor=pink>" + "</td>";
                }else if(i==6){
                    html += "<td bgcolor=lightblue>" +  "</td>";
                }else{
                    html += "<td></td>";
                }
            }else if(endday<daycount){
                if(i==0){
                    html += "<td bgcolor=pink>" + "</td>";
                }else if(i==6){
                    html += "<td bgcolor=lightblue>" +  "</td>";
                }else{
                    html += "<td></td>";
                }
            }else if(today.getFullYear()==year && today.getMonth()+1==month && today.getDate()==daycount){
                if(i==0){
                    html += "<td bgcolor=pink style=color:red>" + daycount + "</td>";
                }else if(i==6){
                    html += "<td bgcolor=lightblue style=color:red>" + daycount + "</td>";
                }else{
                    html += "<td style=color:red>" + daycount + "</td>";
                }
                daycount++;
            }else if(i==0){
                html += "<td bgcolor=pink>" + daycount + "</td>";
                daycount++;
            }else if(i==6){
                html += "<td bgcolor=lightblue>" + daycount + "</td>";
                daycount++;
            }else{
                html += "<td>" + daycount + "</td>";
                daycount++;
            }
        }
        html += "</tr>";
        if(daycount==endday+1){
            break;
        }
    }
    html += "</table>";

    return html;
}

function back() {
    // 表示用の日付の月-1を設定
    showDate.setMonth(showDate.getMonth() - 1);
    // カレンダーの表示（引数には表示用の日付を設定）
    showCalendar(showDate);
  }

  function go() {
    // 表示用の日付の月+1を設定
    showDate.setMonth(showDate.getMonth() + 1);
    // カレンダーの表示（引数には表示用の日付を設定）
    showCalendar(showDate);
  }
  