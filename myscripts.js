function insan(isim, yas, gozRengi) {
            this.isim = isim;
            this.yas = yas;
            this.gozRengi = gozRengi;
            this.isimDegistir = function (yeniIsim) {
                this.isim = yeniIsim;
            }
            this.dogumYili = dogumYiliHesapla;
        }

        function dogumYiliHesapla(){
            return 2022-this.yas;
        }

        var i1 = new insan("Ahmet",29,"Kahverengi");
        document.write(i1.isim+" "+i1.yas+" "+i1.gozRengi+"<br>");
        i1.isimDegistir("Kaan");
        document.write(i1.isim+" "+i1.yas+" "+i1.gozRengi+" "+i1.dogumYili());