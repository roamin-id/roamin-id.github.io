## Panduan penggunaan API external

### Flow:
1. Register user baru dengan role external
2. Generate API key lewat web admin
3. Pasang API key pada header untuk mengakses endpoint dibawah
4. Gunakan websocket untuk mendapatkan update secara realtime atau panggil API secara periodik

------------------------------------------------------------------------------------------

#### Statistik jumlah permohonan sampai ke level sub-layanan


<code>GET</code> <code>/services/statistics/external</code>

##### Parameter

> | name         |  type     | data type               | description                                                           |
> |--------------|-----------|-------------------------|-----------------------------------------------------------------------|
> | date         |  optional | string                  | jika kosong akan default ke tanggal hari ini. contoh value: 2024-09-10                   |
> | category     |  optional | string                  | jika diisi akan memfilter data berdasarkan kategori, value dapat dilihat pada tabel mapping di bawah |
> | sub-category |  optional | string                  | jika diisi harus sesuai dengan category dan akan memfilter data berdasarkan sub-category, value dapat dilihat pada tabel mapping di bawah |

##### Header
> | name        | value                  |
> |-------------|------------------------|
> | x-api-key   | API Key dari web admin |

##### Pilihan category dan sub-category

> |category|sub-category|Nama|
> |-----|--------|------------|
> |`kk`|`kk-baru`|Kartu Keluarga (KK)|
> |`kk`|`kk-perubahan`|Kartu Keluarga (KK) Karena Perubahan Data|
> |`kk`|`kk-penambahan`|Kartu Keluarga (KK) Karena Penambahan Anggota Keluarga|
> |`kk`|`kk-pengurangan`|Kartu Keluarga (KK) Karena Pengurangan Anggota Keluarga|
> |`kk`|`kk-hilang`|Kartu Keluarga (KK) Karena Hilang|
> |`kk`|`kk-rusak`|Kartu Keluarga (KK) Karena Rusak|
> |`kk`|`kk-asing`|Kartu Keluarga (KK) Karena Penambahan Anggota Keluarga bagi Orang Asing yang Memiliki Izin TInggal Tetap|
> |`akta`|`akta-lahir`|Tridatu Akta Kelahiran|
> |`akta`|`akta-mati`|Tridatu Akta Kematian|
> |`akta`|`akta-kawin`|Tridatu Akta Perkawinan|
> |`akta`|`akta-cerai`|Tridatu Akta Perceraian|
> |`akta`|`akta-pengakuan-anak`|Akta Pengakuan Anak|
> |`akta`|`akta-pengesahan-anak`|Akta Pengesahan Anak|
> |`akta`|`akta-pengangkatan-anak`|Akta Pengangkatan Anak|
> |`akta`|`akta-catatan-sipil`|Pembetulan/Rusak Akta|
> |`akta`|`akta-perubahan-nama`|Perubahan Nama|
> |`akta`|`akta-perubahan-wn`|Perubahan Kewarganegaraan|
> |`akta`|`akta-pembatalan`|Pembatalan Akta|
> |`akta`|`akta-peristiwa-penting`|Peristiwa Penting Lainnya|
> |`akta`|`akta-hilang`|Akta Hilang|
> |`kia`|`kia-baru`|Kartu Identitas Anak (KIA) Baru|
> |`kia`|`kia-perubahan`|Kartu Identitas Anak (KIA) Karena Perubahan Data|
> |`kia`|`kia-hilang`|Kartu Identitas Anak (KIA) Karena Hilang|
> |`kia`|`kia-rusak`|Kartu Identitas Anak (KIA) Karena Rusak|
> |`ktp`|`ktp-baru`|Kartu Tanda Penduduk (KTP) Baru|
> |`ktp`|`ktp-perubahan`|Kartu Tanda Penduduk (KTP) Karena Perubahan Data|
> |`ktp`|`ktp-hilang`|Kartu Tanda Penduduk (KTP) Karena Hilang|
> |`ktp`|`ktp-rusak`|Kartu Tanda Penduduk (KTP) Karena Rusak|
> |`inovasi`|`aksama`|AKSAMA (Menyerahkan Akta Kematian Pada Saat Berduka)|
> |`inovasi`|`aksara`|AKSARA (Administrasi Kependudukan Secara Daring bagi Orang Asing)|
> |`inovasi`|`balita`|BALITA (Bayi Lahir Berakta)|
> |`inovasi`|`nyaksi`|NYAKSI (Menyerahkan Akta Perkawinan Pada Saat Upacara Perkawinan)|
> |`inovasi`|`sakinah`|SAKKINAH (Serahkan Kartu Keluargaa Saat Pernikahan)|

##### Responses

> | status code   | name                | message                                          |
> |---------------|---------------------|--------------------------------------------------|
> | `200`         |                     | Lihat contoh response sukses di bawah            |
> | `401`         | `UnauthorizedError` | `Mohon isi API Key`                              |
> | `401`         | `UnauthorizedError` | `API KEY tidak terdaftar`                        |
> | `404`         | `NotFoundError`     | `Kategori wajib ada jika mengisi sub kategori`   |
> | `404`         | `NotFoundError`     | `Sub Kategori tidak terdaftar`                   |

##### Example cURL

> ```javascript
>  curl -X 'GET' 'http://localhost:3001/services/statistics/external?category=akta' -H 'accept: application/json' -H 'x-api-key: 352a8ef6-fbba-4c79-8f01-fe50da076055'
> ```


------------------------------------------------------------------------------------------


SUCCESS RESPONSE:
```
[
  {
    "categoryKey": 5,
    "categoryName": "Akta",
    "data": [
      {
        "subCategoryKey": 20,
        "subCategoryName": "Tridatu Akta Kelahiran",
        "statistic": {
          "submitted": 11,
          "inReview": 1,
          "reviewed": 1,
          "completed": 8,
          "returnedFromFO": 0,
          "returnedFromValidator": 0,
          "unprocessed": 1
        }
      }
    ]
  }
]
```

ERROR RESPONSE
```
{
  "error": {
    "statusCode": 401,
    "name": "UnauthorizedError",
    "message": "API KEY tidak terdaftar"
  }
}
```
##### Statistic data
> | field                   |status           | Description                                                    |
> |-------------------------|-----------------|----------------------------------------------------------------|
> | `submitted`             | ANTRIAN MASUK   | Jumlah permohonan yang diajukan hari ini                       |
> | `inReview`              | DIPROSES FO     | Jumlah permohonan yang sedang diproses oleh FO hari ini        |
> | `reviewed`              | DIVALIDASI      | Jumlah permohonan yang sudah disetujui validator hari ini      |
> | `completed`             | DICETAK         | Jumlah permohonan yang sudah dicetak hari ini                  |
> | `returnedFromFO`        | BATAL FO        | Jumlah permohonan yang dikembalikan ke warga/opr desa hari ini |
> | `returnedFromValidator` | BATAL VALIDATOR | Jumlah permohonan yang dikembalikan ke FO hari ini             |
> | `unprocessed`           | BELUM DIPROSES  | Jumlah permohonan belum diproses FO hari ini                   |

------------------------------------------------------------------------------------------

#### Websocket untuk komunikasi real-time

1. Gunakan transport `websocket`
2. Setelah tersambung, emit `subscribe-to-channel` dengan data `['NewRequest', 'UpdateRequest']`
3. Listen event `message` untuk mendapatkan update
```
socket = io(ws://localhost:3002, {
    transports: ['websocket'], 
    autoConnect: false,
});

socket.on('connect', () => {
  socket.emit('subscribe-to-channel', [
      'NewRequest',
      'UpdateRequest',
    ]);
});

socket.on('message', (msg) => {
    //fetch ulang data statistik
});```
