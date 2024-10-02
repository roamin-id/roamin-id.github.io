Panduan penggunaan API external

Flow:
1. Register user baru dengan role external
2. Generate API key lewat web admin
3. Gunakan APIKEY untuk mengakses API berikut

GET `/services/statistics/external`

PARAMS:
|Nama|Deskripsi|Keterangan|Pilihan|
|-----|--------|-----|--------|
|`APIKEY`|API key di generate dari halaman web admin       |Wajib diisi|N/A       |
|`date`|tanggal       |Tidak Wajib, default hari ini|       |
|`category`|Kategori dari surat yang akan di query       |Tidak Wajib, jika diisi akan memfilter data berdasarkan kategori|akta, inovasi, kia, ktp, kk, suket       |
|`sub-category`|Sub dari Kategori surat       |Tidak Wajib, jika diisi harus sesuai dengan category dan akan memfilter data berdasarkan sub-category|Lihat tabel berikut     |

|category|sub-category|Nama|
|-----|--------|------------|
|`kk`|`kk-baru`|Kartu Keluarga (KK)|
|`kk`|`kk-perubahan`|Kartu Keluarga (KK) Karena Perubahan Data|
|`kk`|`kk-penambahan`|Kartu Keluarga (KK) Karena Penambahan Anggota Keluarga|
|`kk`|`kk-pengurangan`|Kartu Keluarga (KK) Karena Pengurangan Anggota Keluarga|
|`kk`|`kk-hilang`|Kartu Keluarga (KK) Karena Hilang|
|`kk`|`kk-rusak`|Kartu Keluarga (KK) Karena Rusak|
|`kk`|`kk-asing`|Kartu Keluarga (KK) Karena Penambahan Anggota Keluarga bagi Orang Asing yang Memiliki Izin TInggal Tetap|
|`akta`|`akta-lahir`|Tridatu Akta Kelahiran|
|`akta`|`akta-mati`|Tridatu Akta Kematian|
|`akta`|`akta-kawin`|Tridatu Akta Perkawinan|
|`akta`|`akta-cerai`|Tridatu Akta Perceraian|
|`akta`|`akta-pengakuan-anak`|Akta Pengakuan Anak|
|`akta`|`akta-pengesahan-anak`|Akta Pengesahan Anak|
|`akta`|`akta-pengangkatan-anak`|Akta Pengangkatan Anak|
|`akta`|`akta-catatan-sipil`|Pembetulan/Rusak Akta|
|`akta`|`akta-perubahan-nama`|Perubahan Nama|
|`akta`|`akta-perubahan-wn`|Perubahan Kewarganegaraan|
|`akta`|`akta-pembatalan`|Pembatalan Akta|
|`akta`|`akta-peristiwa-penting`|Peristiwa Penting Lainnya|
|`akta`|`akta-hilang`|Akta Hilang|

RESPONSE:
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
          "returnedFromValidator": 0
        }
      }
    ]
  }
]
```
