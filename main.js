function goList() {

    document.location.href = "index2.html";
}
function goTarotList() {

    document.location.href = "index3.html";
}
function goConstellationList() {

    document.location.href = "index4.html";
}
function goZodiacList() {

    document.location.href = "index5.html";
}
function showTarot() {
    var str = '<div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>城市</option>                                    <option value="1">台北市</option>                                    <option value="2">台中市</option>                                    <option value="3">高雄市</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>詢問項目</option>                                    <option value="1">工作</option>                                    <option value="2">感情</option>                                    <option value="3">健康</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>服務模式</option>                                    <option value="1">線上算</option>                                    <option value="2">留言</option>                                    <option value="3">網頁算命</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>價格</option>                                    <option value="1">0~300</option>                                    <option value="2">301~600</option>                                    <option value="2">601~1000</option>                                    <option value="3">1001以上</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <input type="text" class="form-control" id="validationDefault05" placeholder="關鍵字">                            </div>                            <div class="col-md-2 mb-3">                               <button class="btn btn-primary center"  onclick="goTarotList()">尋找服務</button>                            </div>'
    document.getElementById("form-row").innerHTML = str;
}
function showConstellation() {
    var str = '<div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>城市</option>                                    <option value="1">台北市</option>                                    <option value="2">台中市</option>                                    <option value="3">高雄市</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>詢問項目</option>                                    <option value="1">工作</option>                                    <option value="2">感情</option>                                    <option value="3">健康</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>服務模式</option>                                    <option value="1">線上算</option>                                    <option value="2">留言</option>                                    <option value="3">網頁算命</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>價格</option>                                    <option value="1">0~300</option>                                    <option value="2">301~600</option>                                    <option value="2">601~1000</option>                                    <option value="3">1001以上</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <input type="text" class="form-control" id="validationDefault05" placeholder="關鍵字">                            </div>                            <div class="col-md-2 mb-3">                               <button class="btn btn-primary center"  onclick="goConstellationList()">尋找服務</button>                            </div>'
    document.getElementById("form-row").innerHTML = str;
}
function showZodiac() {
    var str = '<div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>城市</option>                                    <option value="1">台北市</option>                                    <option value="2">台中市</option>                                    <option value="3">高雄市</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>詢問項目</option>                                    <option value="1">工作</option>                                    <option value="2">感情</option>                                    <option value="3">健康</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>服務模式</option>                                    <option value="1">線上算</option>                                    <option value="2">留言</option>                                    <option value="3">網頁算命</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <select class="custom-select" id="validationDefault04" required>                                    <option selected>價格</option>                                    <option value="1">0~300</option>                                    <option value="2">301~600</option>                                    <option value="2">601~1000</option>                                    <option value="3">1001以上</option>                                </select>                            </div>                            <div class="col-md-2 mb-3">                                <input type="text" class="form-control" id="validationDefault05" placeholder="關鍵字">                            </div>                            <div class="col-md-2 mb-3">                               <button class="btn btn-primary center"  onclick="goZodiacList()">尋找服務</button>                            </div>'
    document.getElementById("form-row").innerHTML = str;
}
function buybuybuy() {
    dataLayer.push({
        "event": "GA4purchase", "GA4purchase": { "ecommerce": { "purchase": { "transaction_id": "testdebug21", "affiliation": "Online Store", "value": "20", "tax": "0", "shipping": "0", "currency": "USD", "items": [{ "item_name": "Spin 5 Laptop - SP513-52N-52PL", "item_id": "UM.HX3AA.003", "price": "149", "item_brand": "Acer_test5", "item_category": "Ordinateurs Portables", "quantity": 1, "item_coupon": "" }, { "item_name": "27\" K3 Monitor - K273 BI", "item_id": "NX.GR7AA.012", "price": "149", "item_brand": "Acer_test5", "item_category": "Ordinateurs Portables", "quantity": 1, "item_coupon": "" }, { "item_name": "test2123", "item_id": "UD.P02AA.057s", "price": "149", "item_brand": "Acer_test5", "item_category": "Ordinateurs Portables", "quantity": 1, "item_coupon": "" }, { "item_name": "Predator Orion 3000 Gaming Desktop - PO3-600-UR20", "item_id": "UD.P02AA.057", "price": "149", "item_brand": "Acer_test5", "item_category": "Ordinateurs Portables", "quantity": 1, "item_coupon": "" }] } } }
    })
    gtag('event', 'buybuybuy', {
        'event_category': 'yes',
        'event_label': 'Ya',
        'value': 2000
      });
    document.location.href = "buySuccess.html";
}