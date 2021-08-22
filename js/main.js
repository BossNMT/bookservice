const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    infoguest: {
        fullName: '',
        dateguest: '',
        phone: '',
        address: '',
        note: '' 
    },
    valueFN: function() {
        const _this = this
        const fnElement = $('#fullname')
        fnElement.onchange = function(e) {
            _this.infoguest.fullName = e.target.value
        }
    },

    valueDate: function() {
        const _this = this
        const dateElement = $('#datename')
        dateElement.onchange = function(e) {
            _this.infoguest.dateguest = e.target.value
        }
    },

    valuePhone: function() {
        const _this = this
        const phoneElement = $('#phonename')
        phoneElement.onchange = function(e) {
            _this.infoguest.phone = e.target.value
        }
    },

    valueAddress: function() {
        const _this = this
        const addressElement = $('#arname')
        addressElement.onchange = function(e) {
            _this.infoguest.address = e.target.value
        }
    },

    valueNote: function() {
        const _this = this
        const noteElement = $('#note')
        noteElement.onchange = function(e) {
            _this.infoguest.note = e.target.value
        }
    },

    
    
    getQR: function() {
        const _this = this
        const bookbtnElement = $('.book-checkout')
        bookbtnElement.onclick = function() {
            const FName = _this.infoguest.fullName
            const dateguest = _this.infoguest.dateguest
            const phone =  _this.infoguest.phone
            const address = _this.infoguest.address
            const note = _this.infoguest.note

            if( FName === '' || dateguest === '' ||phone === '' || address === ''){
                alert('Bạn chưa điền đầy đủ thông tin, Hãy điền đủ thông tin nhé :)) _NMT_')
            }else {
                const code = (Math.random() * 10000000).toFixed();
                const bookElement = $('.book')

                bookElement.innerHTML = 
                `<div class="text-center">
                    <br><br><br><br><br>
                    <div class="spinner-border text-success" style="width: 7rem; height: 7rem;" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <br><br>
                    <h1 id="loading-h1">Loading...</h1>
                    <br><br><br><br><br>
                </div>
                </div>`

                setTimeout(function() {
                    bookElement.innerHTML =
                    `<h1 class="book-head">Book Success</h1>
                    <div class="info">
                        <p class="info-p">CODE: ${code}</p>
                        <p class="info-p">Full Name: ${FName}</p>
                        <p class="info-p">Date: ${dateguest}</p>
                        <p class="info-p">Phone: ${phone}</p>
                        <p class="info-p">Address: ${address}</p>
                        <p id="info-note" class="info-p">Note: ${note}</p>  
                    </div>   
                    
                    <div class="info-qr">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CODE: ${code}, Full Name:${FName}, Date:${dateguest}, Phone:${phone}, Address:${address}, Note:${note}, Đã Book Thành Công NV ID=1: Ngô Minh Thuận" alt="Mã QR Của Bạn">
                        <address>Hãy chụp lại mã QR</address>
                    </div>`    
                }, 5000)
                    
            }
            
        }

    },
    
    start: function() {
        this.valueFN();
        this.valueDate();
        this.valuePhone();
        this.valueAddress();
        this.valueNote();

        

        this.getQR();

    }
}

app.start();


const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "ngothuan147@icloud.com", password: "ngominhthuan"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});

