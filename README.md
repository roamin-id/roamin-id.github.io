## Panduan penggunaan API external

### Flow:
1. Register user baru dengan role external
2. Generate API key lewat web admin
3. Gunakan APIKEY untuk mengakses API berikut

------------------------------------------------------------------------------------------

#### Statistik jumlah permohonan sampai ke level sub-layanan


<code>GET</code> <code>/services/statistics/external</code>

##### Parameter

> | name         |  type     | data type               | description                                                           |
> |--------------|-----------|-------------------------|-----------------------------------------------------------------------|
> | date         |  optional | string                  | default adalah tanggal hari ini                                       |
> | category     |  optional | string                  | jika diisi akan memfilter data berdasarkan kategori, value dapat dilihat pada tabel mapping di bawah |
> | sub-category |  optional | string                  | jika diisi harus sesuai dengan category dan akan memfilter data berdasarkan sub-category, value dapat dilihat pada tabel mapping di bawah |

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

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | Lihat contoh response sukses di bawah                               |
> | `401`         | `text/html;charset=utf-8`         | `Mohon isi API Key`                                                 |
> | `401`         | `text/html;charset=utf-8`         | `API KEY tidak terdaftar`                                           |
> | `404`         | `text/html;charset=utf-8`         | `Kategori wajib ada jika mengisi sub kategori`                      |
> | `404`         | `text/html;charset=utf-8`         | `Sub Kategori tidak terdaftar`                               |

##### Example cURL

> ```javascript
>  curl http://antri.roamin.id/services/statistics/external?APIKEY=8358fbe4-9b4d-4042-a7d6-8d1478505302&category=akta
> ```


------------------------------------------------------------------------------------------


SUCCESS RESPONSE:
```
[
  {
    "categoryKey": 0,
    "categoryName": "string",
    "data": [
      {
        "subCategoryKey": 0,
        "subCategoryName": "string",
        "statistic": {
          "submitted": 0,
          "inReview": 0,
          "reviewed": 0,
          "completed": 0,
          "returnedFromFO": 0,
          "returnedFromValidator": 0,
          "unprocessed": 0
        }
      }
    ]
  }
]
```
##### Statistic data
> | field     | Description                                                            |
> |---------------|---------------------------------------------------------------------|
> | `submitted`         | Jumlah permohonan yang diajukan sampai saat ini                               |
> | `inReview`         |  Jumlah permohonan yang sedang diproses oleh FO                                                 |
> | `reviewed`         | Jumlah permohonan yang sudah disetujui validator                      |
> | `completed`         | Jumlah permohonan yang sudah dicetak                      |
> | `returnedFromFO`         | Jumlah permohonan yang dikembalikan ke warga/opr desa                               |
> | `returnedFromValidator`        | Jumlah permohonan yang dikembalikan ke FO                               |
> | `unprocessed`        | Jumlah permohonan belum diproses FO                               |