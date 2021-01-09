var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OnlineShop = /** @class */ (function () {
    function OnlineShop() {
        this.$kotaAnton = 'banyuwangi';
    }
    OnlineShop.prototype.garansi = function ($kategori, $harga) {
        var $garansi;
        if ($kategori == 'laptop') {
            $garansi = '15 Hari';
        }
        else {
            if ($harga < 1500000) {
                $garansi = '1 Bulan';
            }
            else if ($harga >= 1500000 && $harga <= 3000000) {
                $garansi = '2 Bulan';
            }
            else if ($harga > 3000000) {
                $garansi = '3 Bulan';
            }
        }
        return $garansi;
    };
    OnlineShop.prototype.ongkir = function ($kota_user) {
        if ($kota_user != this.$kotaAnton) {
            this.$ongkir = 20000;
        }
        else {
            this.$ongkir = 0;
        }
        return this.$ongkir;
    };
    return OnlineShop;
}());
var barangLaptop = /** @class */ (function (_super) {
    __extends(barangLaptop, _super);
    function barangLaptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    barangLaptop.prototype.getGaransi = function ($kategori, $harga) {
        return this.garansi($kategori, $harga);
    };
    barangLaptop.prototype.CashbackLaptop = function ($harga, $jumlah) {
        this.$base_harga = $jumlah * $harga;
        this.$cashback = this.$base_harga * (5 / 100);
        return this.$cashback;
    };
    barangLaptop.prototype.SubHargaLaptopNormal = function ($harga, $jumlah) {
        var hasil;
        this.$base_harga = $jumlah * $harga;
        hasil = this.$base_harga;
        return hasil;
    };
    return barangLaptop;
}(OnlineShop));
var barangHp = /** @class */ (function (_super) {
    __extends(barangHp, _super);
    function barangHp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    barangHp.prototype.getGaransi = function ($kategori, $harga) {
        return this.garansi($kategori, $harga);
    };
    barangHp.prototype.SubHargaHp = function ($harga, $jumlah) {
        var hasil;
        this.$base_harga = $jumlah * $harga;
        hasil = this.$base_harga;
        return hasil;
    };
    return barangHp;
}(OnlineShop));
var laptop = new barangLaptop(); // objek laptop class baranglaptop
var hp = new barangHp(); // objek hp class barang hp
var pelanggan = new OnlineShop(); // objek pelanggan class onlineshop
var barang = new Array(); // variable list barang array
var id_cart = new Array(); // variable menampung id_barang
var jmlNormal = 0; // menampung hasil total harga seluruh pembelanjaan
var jmlCashback = 0; // menampung hasil total cashback
barang = [
    ['1', 'Laptop Dell N4050', '3900000', 'pic1.jpg', 'laptop', '<li>Processor Intel Core i5 - 2450M 2.50 Ghz</li><li>Ram 8GB DDR3 (Dual Channel)</li><li>SSD 240GB dan HDD 320GB</li><li>Graphic Intel HD 3000</li>'],
    ['2', 'LG Nexus 5', '3100000', 'pic2.jpg', 'hp', '<li>Hexa-core (4x1.4 GHz Cortex-A53 & 2x1.8 GHz Cortex-A57)</li><li>Ram 2GB</li><li>Internal 32/64 GB</li><li>Qualcomm MSM8992 Snapdragon 808 (20 nm)</li>'],
    ['3', 'Laptop Hp Pavilion', '13900000', 'pic3.jpg', 'laptop', '<li>Processor Intel Core i7 - 6700 2.6 Ghz</li><li>Ram 16 GB</li><li>HDD 1TB</li><li>GTX960M 4GB</li>'],
    ['4', 'Acer Aspire 4732Z', '3000000', 'pic4.jpg', 'laptop', '<li>Processor Intel Pentium P6100 2.00 GHz</li><li>Ram 4GB DDR2</li><li>HDD 500 GB</li><li>Graphic Intel HD Graphic Family</li>'],
    ['5', 'Sony Xperia Z3', '1400000', 'pic5.jpg', 'hp', '<li>Quad-core 2.5 GHz Krait 400</li><li>Ram 3GB</li><li>Internal 16/32 GB</li><li>Qualcomm MSM8974AC Snapdragon 801 (28 nm)</li>'],
    ['6', 'Xiaomi Redmi 4X', '3000000', 'pic6.jpg', 'hp', '<li>Octa-core 1.4 GHz Cortex-A53</li><li>Ram 4Gb</li><li>Internal 64GB</li><li>Qualcomm MSM8940 Snapdragon 435 (28 nm)</li>']
];
function load_first_page() {
    var text;
    var count = barang.length - 1;
    text = '';
    for (var i = 0; i <= count; i++) {
        text += '<div class="col-sm-4" style="margin-top:15px;">';
        text += '<li class="media" style="border: 2px solid #ddd;background-color: #fff;list-style-type:none;height:270px;"><div class="media-left" style="height: 100%;"><a href="" style="margin-top: 7px;" ><div class="parent" ><div class="child bg-one" style="padding: 0;"><img src="' + barang[i][3] + '" alt="" class="thumb" style="width: 150px;height: 100px;"></div></div></a></div>';
        text += '<div class="media-body" style="padding: 5px;"><p class="judul-baru"><a href="" class="judul-bz">' + barang[i][1] + '</a></p><p class="">Rp ' + barang[i][2] + '</p><button type="button" class="btn btn-success btn-flat btn-sm pull-left" id="oke' + barang[i][0] + '" onclick="add_to_cart(' + barang[i][0] + ')" name="button">Add To Cart</button></div><hr style="margin-top:0px;border:1px solid #eee"><h4 style="margin-left:10px;">Spesifikasi Barang : </h4><ul>' + barang[i][5] + '</ul></li></div>';
    }
    document.getElementById('load1').innerHTML = text;
}
function load_back() {
    var de = document.getElementById('load1');
    var de2 = document.getElementById('load2');
    de.classList.remove('hilang');
    de2.classList.add('hilang');
    var text;
    var count = barang.length - 1;
    text = '';
    for (var i = 0; i <= count; i++) {
        text += '<div class="col-sm-4" style="margin-top:15px;">';
        text += '<li class="media" style="border: 2px solid #ddd;background-color: #fff;list-style-type:none;height:270px;"><div class="media-left" style="height: 100%;"><a href="" style="margin-top: 7px;" ><div class="parent" ><div class="child bg-one" style="padding: 0;"><img src="' + barang[i][3] + '" alt="" class="thumb" style="width: 150px;height: 100px;"></div></div></a></div>';
        if (barang[i][0] == id_cart[i]) {
            text += '<div class="media-body" style="padding: 5px;"><p class="judul-baru"><a href="" class="judul-bz">' + barang[i][1] + '</a></p><p class="">Rp ' + barang[i][2] + '</p><button type="button" class="btn btn-success btn-flat btn-sm pull-left disabled" id="oke' + barang[i][0] + '" name="button">Add To Cart</button></div><hr style="margin-top:0px;border:1px solid #eee"><h4 style="margin-left:10px;">Spesifikasi Barang : </h4><ul>' + barang[i][5] + '</ul></li></div>';
        }
        else {
            text += '<div class="media-body" style="padding: 5px;"><p class="judul-baru"><a href="" class="judul-bz">' + barang[i][1] + '</a></p><p class="">Rp ' + barang[i][2] + '</p><button type="button" class="btn btn-success btn-flat btn-sm pull-left" id="oke' + barang[i][0] + '" onclick="add_to_cart(' + barang[i][0] + ')" name="button">Add To Cart</button></div><hr style="margin-top:0px;border:1px solid #eee"><h4 style="margin-left:10px;">Spesifikasi Barang : </h4><ul>' + barang[i][5] + '</ul></li></div>';
        }
    }
    document.getElementById('load1').innerHTML = text;
}
function add_to_cart(id) {
    var cek = (id_cart.length + 1).toString();
    id_cart.push(id);
    var de = document.getElementById('oke' + id + '');
    de.classList.add('disabled');
    document.getElementById('tot').innerHTML = cek;
}
function totalz(id_barang) {
    var count = barang.length - 1;
    var total_harga;
    var total_cashback;
    var rad = document.getElementById('jmlsel' + id_barang + '').value;
    if (document.getElementById('harku' + id_barang + '').value != '') {
        jmlNormal -= parseInt(document.getElementById('harku' + id_barang + '').value);
        jmlCashback -= parseInt(document.getElementById('cashb' + id_barang + '').value);
        for (var i = 0; i <= count; i++) {
            if (id_barang == barang[i][0]) {
                if (barang[i][4] == 'laptop') {
                    total_harga = laptop.SubHargaLaptopNormal(barang[i][2], parseInt(rad));
                    total_cashback = laptop.CashbackLaptop(barang[i][2], parseInt(rad));
                }
                else if (barang[i][4] == 'hp') {
                    total_harga = hp.SubHargaHp(barang[i][2], parseInt(rad));
                    total_cashback = 0;
                }
            }
        }
    }
    else {
        for (var i = 0; i <= count; i++) {
            if (id_barang == barang[i][0]) {
                if (barang[i][4] == 'laptop') {
                    total_harga = laptop.SubHargaLaptopNormal(barang[i][2], parseInt(rad));
                    total_cashback = laptop.CashbackLaptop(barang[i][2], parseInt(rad));
                }
                else if (barang[i][4] == 'hp') {
                    total_harga = hp.SubHargaHp(barang[i][2], parseInt(rad));
                    total_cashback = 0;
                }
            }
        }
    }
    jmlNormal += total_harga;
    jmlCashback += total_cashback;
    document.getElementById('har' + id_barang + '').innerHTML = total_harga.toString();
    document.getElementById('cashb' + id_barang + '').value = total_cashback.toString();
    document.getElementById('harku' + id_barang + '').value = total_harga.toString();
    document.getElementById('sm' + id_barang + '').value = total_harga.toString();
    document.getElementById('base_total').innerHTML = jmlNormal.toString();
    document.getElementById('baseCash').value = jmlCashback.toString();
}
function bayar() {
    var ongkir;
    if (jmlNormal == 0) {
        alert('belum mengisi jumlah barang !');
        document.getElementById('bayar').value = ' ';
    }
    else if (document.getElementById('kota').value == '') {
        alert('belum mengisi form pelanggan disamping !');
        document.getElementById('bayar').value = ' ';
    }
    else {
        var de = document.getElementById('bayar').value;
        ongkir = pelanggan.ongkir(document.getElementById('kota').value);
        var count = (jmlNormal + ongkir);
        var hasil = parseInt(de) - count;
        if (ongkir == 0) {
            document.getElementById('ong').innerHTML = "";
        }
        else {
            document.getElementById('ong').innerHTML = "+ Ongkos Kirim Rp " + ongkir.toString() + " (Karena Diluar Kota Banyuwangi)";
        }
        document.getElementById('base_total').innerHTML = count.toString();
        document.getElementById('kembali').innerHTML = hasil.toString();
        document.getElementById('tombole').innerHTML = '<button class="btn btn-success btn-flat btn-sm pull-right" onclick="checkout()">Checkout</button>';
    }
}
function checkout() {
    if (document.getElementById('nm_pel').value == '') {
        alert('Kolom Nama Pelanggan Kosong !');
    }
    else if (document.getElementById('alamat').value == '') {
        alert('Kolom Alamat Kosong !');
    }
    else {
        pelanggan.$nama = document.getElementById('nm_pel').value;
        pelanggan.$alamat = document.getElementById('alamat').value;
        pelanggan.$kota = document.getElementById('kota').value;
        var count = barang.length - 1;
        var count1 = id_cart.length - 1;
        var text = '';
        var garansi = void 0;
        var date = new Date();
        text += '<div class="well animated bounceIn fade in"><h1 class=text-center>Online Shop Anton</h1><hr><p class=text-center style=margin-top:-10px>Jl. Genteng Langit No 49 , Banyuwangi Jawa Timur Indonesia<hr><center style=margin-top:-12px><table style=border:none><tr style=padding:10px><td><b>Nama Pelanggan</b><td><b>: ' + pelanggan.$nama + '</b><tr style=padding:10px><td style=width:200px><b>Alamat Pelanggan</b></td><td><b>: ' + pelanggan.$alamat + '</b></td> <tr style=padding:10px> <td style=width:200px><b>Kota Pelanggan</b></td><td><b>: ' + pelanggan.$kota + '</b></td> <tr style=padding:10px> <td style=width:200px><b>Penjualan Tanggal</b><td><b>: ' + date.toDateString() + '</b></table></center> <hr style=margin-top:2px><table class="table"><thead><tr> <th>Nama Barang</th> <th>Jumlah Beli</th> <th>Harga</th></tr></thead><tbody>';
        for (var i = 0; i <= count1; i++) {
            for (var y = 0; y <= count; y++) {
                if (id_cart[i] == barang[y][0]) {
                    if (barang[y][4] == 'laptop') {
                        garansi = laptop.getGaransi('laptop', barang[y][2]);
                    }
                    else {
                        garansi = hp.getGaransi('hp', barang[y][2]);
                    }
                    text += '<input type="hidden" id="sm' + barang[y][0] + '">';
                    text += '<input type="hidden" id="harku' + barang[y][0] + '">';
                    text += '<tr><td> ' + barang[y][1] + ' (<i>Garansi <b>' + garansi + '</b></i>)</td> <td> ' + document.getElementById('jmlsel' + barang[y][0] + '').value + ' </td><td>Rp <b class="">' + document.getElementById('sm' + barang[y][0] + '').value + '</b></td> </tr> </tr>';
                }
            }
        }
        var kembali = 0;
        var ongkir = pelanggan.ongkir(pelanggan.$kota);
        if (document.getElementById('baseCash').value == "0") {
            kembali += parseInt(document.getElementById('bayar').value) - (jmlNormal + ongkir);
            text += '<tr> <td colspan="2">Total Harga</td> <td>Rp <b>' + (jmlNormal + ongkir) + '</b></td> </tr> <tr> <td colspan="2">Bayar</td> <td>Rp <b>' + document.getElementById('bayar').value + '</b></td> </tr> <tr> <td colspan="2">Kembali</td> <td>Rp <b>' + kembali + '</b></td> </tr> </tbody> </table></div>';
        }
        else {
            kembali += parseInt(document.getElementById('bayar').value) - (jmlNormal + ongkir);
            text += '<tr> <td colspan="2">Total Harga</td> <td>Rp <b>' + (jmlNormal + ongkir) + '</b></td> </tr> <tr> <td colspan="2">Bayar</td> <td>Rp <b>' + document.getElementById('bayar').value + '</b></td> </tr> <tr class="info"><td colspan="2">Cashback 5% (Akumulasi dari setiap pembelian laptop)</td> <td>Rp <b>' + document.getElementById('baseCash').value + '</b></td></tr> <tr> <td colspan="2">Kembali</td> <td>Rp <b>' + (kembali + parseInt(document.getElementById('baseCash').value)) + '</b></td>  </tr>  </tbody> </table></div>';
        }
        var deq = document.getElementById('load2');
        var de2q = document.getElementById('load3');
        deq.classList.add('hilang');
        de2q.classList.remove('hilang');
        document.getElementById('load3').innerHTML = text.toString();
    }
}
function hapus(id) {
    var count1 = id_cart.length - 1;
    var count = barang.length - 1;
    var text = '';
    for (var i = 0; i <= count1; i++) {
        if (id_cart[i] == id) {
            id_cart.splice(i, 1);
        }
    }
    text += '<div class="col-md-6"> <div class="panel panel-success"> <div class="panel-body"> <div class="form-group"> <div class="form-group"> <label for="">Nama Pelanggan</label> <input type="text" id="nm_pel" class="form-control" value=""> </div> <div class="form-group"> <label for="">Alamat</label> <textarea id="alamat" class="form-control" rows="4"></textarea> </div> <div class="form-group"> <label for="">Kota</label> <input type="text" id="kota" class="form-control" value=""> </div> </div> </div> </div> <button class="btn btn-primary btn-flat pull-left" onclick="load_back()">Kembali Ke List barang</button> </div>';
    text += '<div class="col-md-6"><h1 class=text-center>Online Shop Anton - Keranjang Belanja</h1><hr> <table class="table"><thead><tr> <th>Nama Barang</th> <th>Jumlah Beli</th> <th>Harga</th></tr></thead><tbody>';
    for (var i = 0; i <= count1; i++) {
        for (var y = 0; y <= count; y++) {
            if (id_cart[i] == barang[y][0]) {
                text += '<input type="hidden" id="sm' + barang[y][0] + '">';
                text += '<input type="hidden" id="harku' + barang[y][0] + '">';
                text += '<input type="hidden" id="cashb' + barang[y][0] + '">';
                text += '<tr><td> ' + barang[y][1] + ' <button type="button" class="btn btn-danger btn-flat btn-sm" name="button" onclick="hapus(' + barang[y][0] + ')">X</button> </td> <td> <select class="form-control" name="jumsel" id="jmlsel' + barang[y][0] + '" onchange="totalz(' + barang[y][0] + ')"> <option value="">Pilih Jumlah</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">8</option> <option value="10">10</option> </select>  </td> <td>Rp <b id="har' + barang[y][0] + '" class="harall">0</b></td> </tr>';
            }
        }
    }
    text += '<input type="hidden" id="baseCash">';
    text += '<tr> <td colspan="2">Total Harga</td> <td>Rp <b id="base_total">0</b> <b id="ong"></b></td> </tr> <tr> <td colspan="2">Bayar</td> <td>Rp <b><input type="text" id="bayar" onkeyup="bayar()" class="form-control"></b></td> </tr> <tr> <td colspan="2">Kembali</td> <td>Rp<b id="kembali"> 0</b></td> </tr> </tbody> </table><div class="col-md-12" id="tombole"></div></div>';
    jmlNormal = 0;
    jmlCashback = 0;
    document.getElementById('load2').innerHTML = text.toString();
    var cek = (id_cart.length).toString();
    document.getElementById('tot').innerHTML = cek;
}
function cart() {
    var de = document.getElementById('load1');
    var de2 = document.getElementById('load2');
    de.classList.add('hilang');
    de2.classList.remove('hilang');
    var count = barang.length - 1;
    var count1 = id_cart.length - 1;
    var text = '';
    text += '<div class="col-md-6"> <div class="panel panel-success"> <div class="panel-body"> <div class="form-group"> <div class="form-group"> <label for="">Nama Pelanggan</label> <input type="text" id="nm_pel" class="form-control" value=""> </div> <div class="form-group"> <label for="">Alamat</label> <textarea id="alamat" class="form-control" rows="4"></textarea> </div> <div class="form-group"> <label for="">Kota</label> <input type="text" id="kota" class="form-control" value=""> </div> </div> </div> </div> <button class="btn btn-primary btn-flat pull-left" onclick="load_back()">Kembali Ke List barang</button> </div>';
    text += '<div class="col-md-6"><h1 class=text-center>Online Shop Anton - Keranjang Belanja</h1><hr> <table class="table"><thead><tr> <th>Nama Barang</th> <th>Jumlah Beli</th> <th>Harga</th></tr></thead><tbody>';
    for (var i = 0; i <= count1; i++) {
        for (var y = 0; y <= count; y++) {
            if (id_cart[i] == barang[y][0]) {
                text += '<input type="hidden" id="sm' + barang[y][0] + '">';
                text += '<input type="hidden" id="harku' + barang[y][0] + '">';
                text += '<input type="hidden" id="cashb' + barang[y][0] + '">';
                text += '<tr><td> ' + barang[y][1] + ' <button type="button" class="btn btn-danger btn-flat btn-sm" name="button" onclick="hapus(' + barang[y][0] + ')">X</button> </td> <td> <select class="form-control" name="jumsel" id="jmlsel' + barang[y][0] + '" onchange="totalz(' + barang[y][0] + ')"> <option value="">Pilih Jumlah</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">8</option> <option value="10">10</option> </select>  </td> <td>Rp <b id="har' + barang[y][0] + '" class="harall">0</b></td> </tr>';
            }
        }
    }
    text += '<input type="hidden" id="baseCash">';
    text += '<tr> <td colspan="2">Total Harga</td> <td>Rp <b id="base_total">0</b> <b id="ong"></b></td> </tr> <tr> <td colspan="2">Bayar</td> <td>Rp <b><input type="text" id="bayar" onkeyup="bayar()" class="form-control"></b></td> </tr> <tr> <td colspan="2">Kembali</td> <td>Rp<b id="kembali"> 0</b></td> </tr> </tbody> </table><div class="col-md-12" id="tombole"></div></div>';
    document.getElementById('load2').innerHTML = text.toString();
}
