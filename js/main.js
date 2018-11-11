class Person {
    constructor (name, budget, monthlyPayment) {
        this.id = Math.floor(Math.random()*90000000) + 10000000
        this.name = name
        this.budget = budget
        //this.startDate = startDate
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
        this.monthNames = [
            "Ocak", "Şubat", "Mart",
            "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül",
            "Ekim", "Kasım", "Aralık"
        ]
        this.day = d.getDate()
        this.monthIndex = d.getMonth()
        this.monthName = this.monthNames[this.monthIndex]
        this.year = d.getFullYear()
    }

    previousMonth(){
        this.monthIndex = this.monthIndex - 1
        this.monthName = this.monthNames[this.monthIndex]
    }

    nextMonth () {
        this.monthIndex += 1
        this.monthName = this.monthNames[this.monthIndex]
    }

    formated (format = "-") {
        format == "" ? format = "-" : null
        return this.year + format + (this.monthIndex+1)
    }

    toString (format = "/") {
        format == "" ? format = "/" : null
        return this.day + format + this.monthName + format + this.year
    }
}