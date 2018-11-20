class Person {
    constructor (name, budget, startDate, monthlyPayment) {
        this.id = Math.floor(Math.random()*90000000) + 10000000
        this.name = name
        this.budget = budget
        this.startDate = startDate
        this.monthlyPayment = monthlyPayment
        this.payment = this.calcMPCount()
    }

    calcMPCount () {
        var dizi = []
        var cMonth = 0
        var mp = this.monthlyPayment
        var b = this.budget
        while (b > 0) {
            cMonth += 1
            if (cMonth % 13 == 0) {
                mp = Math.ceil(mp * 1.15)
            }
            if (b < mp) {
                mp = b
                b = 0
            } else {
                b = b-mp
            }
            
            dizi.push({month: cMonth, payment: mp, debt: b})
        }

        const paymentMap = new Map()
        let stepper = 0
        let fakeDate = this.startDate
        let fakeBudget = this.budget
        let fakePayment = this.monthlyPayment
        let fakeDebt = 0

        while (fakeBudget > 0) {
            // yıllık taksit zammı
            if (stepper % 12 == 0) {
                fakePayment = Math.ceil(fakePayment * 1.15)
            }
            //son ödeme 
            if (fakeBudget < fakePayment) {
                fakePayment = fakeBudget
                fakeBudget = 0
            } else {

            }
        }

        return dizi
    }

    toString () {
        return this.name + ` has gonna take ` + this.budget
    }
}

class Payment {
    constructor (date, monthlyPayment) {
        this.date = date
        this.monthlyPayment = monthlyPayment
    }
}

class formatDate {
    constructor (d = new Date()) {
        this.monthIndex = d.getMonth()
        this.monthName = formatDate.monthNames(this.monthIndex)
        this.year = d.getFullYear()
    }

    static monthNames (index) {
        let dizi = [
            "Ocak", "Şubat", "Mart",
            "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül",
            "Ekim", "Kasım", "Aralık"
        ]
        if (index == undefined) {
            return dizi
        } else {
            return dizi[index]
        }
        
    }

    previousMonth(){
        if ((this.monthIndex -1) == -1) {
            this.monthIndex = 11
            this.year -= 1
        } else {
            this.monthIndex -= 1
        }
        this.monthName = formatDate.monthNames(this.monthIndex)
    }

    nextMonth () {
        if ((this.monthIndex + 1) == 12) {
            this.monthIndex = 0
            this.year += 1
        } else {
            this.monthIndex += 1
        }
        this.monthName = formatDate.monthNames(this.monthIndex)
    }

    formated (format = "-") {
        format == "" ? format = "-" : null
        return this.year + format + (this.monthIndex+1)
    }

    toString (format = "/") {
        format == "" ? format = "/" : null
        return this.monthName + format + this.year
    }
}