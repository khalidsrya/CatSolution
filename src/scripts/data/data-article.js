const articles = [
  {
    id: '1',
    author: 'dr.Fadhli Rizal Makarim',
    title: 'Mengetahui Tentang Makanan Kucing',
    description: 'Makanan kucing adalah pengasuhan dan perawatan terpenting di samping perawatan lainnya. Perlu diingat, pola makan yang tepat dapat mencegah kucing mengalami masalah kesehatan. Sebagai pemilik kucing kamu harus tahu apa saja mengenai makanan kucing. Hal yang paling penting dalam makanan kucing yaitu memastikan hewan peliharaan kamu mendapatkan semua nutrisi yang dibutuhkannya agar selalu sehat. <br> <br> Mulailah dengan mempelajari kandungan makanan kucing dan apa yang dibutuhkan oleh kucing peliharaan kamu. Kucing tidak membutuhkan karbohidrat, meskipun jagung, gandum, dan nasi digunakan sebagai pengisi makanan kaleng dan kering. Bahan lainnya, seperti bahan pengikat, penyedap rasa, dan pewarna ditambahkan oleh produsen makanan kucing untuk memenuhi keinginan dan estetika kucing. Meskipun makanan kucing mengandung pengawet agar makanan tetap segar, sebaiknya makanan kaleng tidak dibiarkan ada di luar dalam waktu lama.',
    urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iwMUazXgUZizcYzwlr7ASqWA3i9dms4vrbx8YiOVJg&s',
    url: 'https://www.halodoc.com/artikel/hal-yang-perlu-diketahui-tentang-makanan-kucing',
  },
  
  {
    id: '2',
    author: 'Halodoc',
    title: 'Mengetahui Apakah Kucing Anda Sehat?',
    description: 'Kucing dewasa Anda adalah perwujudan sempurna dari mobilitas, kecepatan, ketajaman, dan keelokan. Ia berada dalam masa jayanya. Ia bersinar dengan bulunya yang berkilau dan bola matanya yang cemerlang. Melompat, meliuk, dan mendarat, tulang-belulangnya mampu menahan regangan yang bahkan tubuh kita tidak sanggup menahannya. Otot-ototnya sangat fleksibel. Gerakannya secepat kilat dan panca inderanya semakin tajam. Memang sulit untuk menjaga agar makhluk petualang ini tetap berada di dalam ruangan. Tetapi dengan melakukannya akan dapat memperpanjang umur seekor kucing, karena membatasinya dari intaian pemangsa, mobil, kutu, dan kucing lain yang mungkin mengidap penyakit seperti leukemia kucing atau virus imunodefisiensi kucing (FIV). <br> <br> Jaga agar kucing Anda tetap terhibur di dalam ruangan dengan menyediakan mainan, struktur untuk dipanjat, tempat-tempat di dekat jendela untuk menonton kegiatan luar ruangan, atau jika ia mampu merespons, sediakan pula tayangan TV dan video khusus. Satu kemungkinan efek samping kucing dalam ruangan yang begitu dimanja adalah obesitas. Jika kucing Anda mulai mengalami penambahan berat badan, batasi atau ubah makanannya dan dorong untuk banyak melakukan olahraga. Luangkan waktu untuk bermain dengan kucing Anda setiap hari.',
    urlToImage: 'data:image/jpeg;base64,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',
    url: 'https://id.iams.asia/cat/cat-articles/healthy-cat-care',
  },
  {
    id: '3',
    author: 'Purina',
    title: 'Waktu & Tips Memandikan Kucing',
    description: 'Seperti yang kita ketahui, kucing bisa membersihkan tubuhnya sendiri. Terkadang, hal tersebut sudah cukup, namun untuk beberapa kondisi, Anda perlu memandikan kucing karena noda atau kotoran yang tidak bisa mereka bersihkan sendiri. Idealnya, waktu memandikan kucing dilakukan setiap 4-6 minggu sekali, tergantung seberapa sering kucing membersihkan tubuhnya, kondisi tempat tinggalnya dan juga rasnya. Untuk kucing yang sering main di luar rumah, biasanya memiliki kebutuhan yang lebih besar untuk dimandikan. Selain kucing yang sering bermain di luar, Anda juga perlu memandikan kucing yang obesitas dan juga kucing yang sudah senior. <br> <br> Untuk kucing dengan ras tanpa rambut, Anda perlu memandikan kucing sekali seminggu karena mereka memiliki produksi minyak yang berlebih. Ada baiknya juga untuk memberikan snack atau treat setelah memandikan kucing. Ini bisa menjadi tips memandikan kucing yang membuatnya mengingat hal tersebut sebagai pengalaman yang positif dan memudahkan proses memandikan kucing kemudian hari. Berikut beberapa cara memandikan kucing <br> <br> <span style="font-weight: bold; color: #2a4f82;">1. Pilih waktu yang tepat</span> <br> Pertama, pilih waktu yang tepat, yaitu saat ia merasa nyaman, lelah atau sedang merasa manja. Saat ia sedang tidak merasa nyaman, hal tersebut bisa mempersulit proses memandikan kucing. <br> <br> <span style="font-weight: bold; color: #2a4f82;">2. Mempersiapkan kucing</span> <br> Kedua, persiapkan kucing dengan memotong kukunya untuk menghindari risiko tercakar. Setelah itu, sisir rambut kucing untuk menghilangkan kulit mati dan juga rambut yang rontok. Pada tahap ini, Anda juga bisa menggunakan kapas untuk menutupi bagian telinganya agar tidak masuk air saat mandi. <br> <br> <span style="font-weight: bold; color: #2a4f82;">3. Siapkan semua kebutuhan dekat jangkauan</span> <br> Anda bisa menggunakan keset karet sebagai alas sang kucing agar ia tidak terpeleset saat berdiri yang juga bisa membuatnya merasa lebih nyaman. Saat membasuh bagian tubuh kucing yang terluka atau iritasi, sebaiknya Anda menggunakan sarung tangan untuk kenyamanan pribadi. <br> <br> Setelah semuanya siap, Anda bisa mulai memandikan kucing. Untuk memandikan kucing, gunakan air hangat (tidak terlalu panas) yang kemudian dibasuh perlahan ke tubuh kucing. Setelah itu, gunakan shampoo dan bersihkan bagian tubuh kucing secara perlahan. Pada bagian wajah, bersihkan dengan menggunakan kain bersih yang sudah dibasahi. Setelah selesai, balut tubuh kucing dengan menggunakan handuk besar dan kemudian keringkan. Untuk mengeringkan tubuh kucing, hair dryer bisa menjadi opsi, asal digunakan dengan suhu yang tidak terlalu pasar.',
    urlToImage: 'https://assets-a1.kompasiana.com/items/album/2018/03/22/pentingnya-memandikan-kucing-5ab3b2b75e1373259632e062.jpg',
    url: 'https://www.purina.co.id/artikel/kucing/perilaku/pertanyaan-umum/memandikan',
  },
  {
    id: '4',
    author: 'Purina',
    title: 'Cara Membersihkan Telinga Kucing',
    description: 'Pada dasarnya, kucing adalah hewan yang cukup menjaga kebersihan. Tapi, ada kalanya ia membutuhkan bantuan untuk membersihkan bagian-bagian yang sulit dijangkau, salah satunya telinga. Para kucing tidak bisa membersihkan telinganya sendiri, oleh karena itu ia membutuhkan bantuan Anda untuk membantu membersihkan telinga kucing. Perlu diketahui, menjaga kebersihan telinga kucing itu penting, untuk mencegah infeksi dan permasalahan telinga lainnya. <br> <br> Salah satu tips yang perlu diperhatikan dalam membersihkan telinga kucing adalah dengan membersihkan telinganya sedini mungkin. Jika Anda mengenalkan rutinitas ini sejak kecil, kucing kesayangan Anda akan lebih cepat terbiasa dan tentunya memudahkan Anda untuk membersihkan telinganya saat ia sudah dewasa. Selain itu, saat membersihkan telinga kucing, usahakan cari waktu saat ia sedang merasa rileks untuk membuatnya merasa nyaman dan tidak memberontak saat telinganya dibersihkan. Saat ia merasa nyaman, cara membersihkan telinga kucing yang bisa Anda lakukan adalah dengan membuka lebar bagian telinganya agar bisa melihat kotoran telinga kucing secara maksimal. Untuk memudahkan, Anda bisa menggunakan senter.',
    urlToImage: 'https://o-cdn-cas.sirclocdn.com/parenting/images/cara-membersihkan-telinga-kucing-.width-800.format-webp.webp',
    url: 'https://www.purina.co.id/artikel/kucing/kesehatan/sehari-hari/bersihkan-telinga',
  },
  {
    id: '5',
    author: 'Purina',
    title: 'Cara Mengatasi Kucing Cacingan',
    description: 'Cacing pada kucing yang paling umum adalah cacing gelang dan cacing pita. Keduanya menyebabkan ketidaknyamanan pada kucing, mulai dari lesu sampai penurunan berat badan. Jika Anda melihat ciri-ciri cacingan pada kucing, Anda bisa segera membawa kucing kesayangan Anda ke dokter hewan. <br> <br> Ada banyak perawatan yang bisa dilakukan untuk mengatasi kucing cacingan, mulai dari obat-obatan cair, krim, butiran, tablet, bahkan cairan yang akan direkomendasikan oleh dokter hewan Anda Cacing gelang pada umumnya sering menyerang anak kucing, makanya sangat disarankan untuk memberikan perawatan cacing sejak usia dini, sejak usia dua hingga delapan minggu, lalu setiap bulan hingga ia berusia enam bulan, dan kemudian satu hingga tiga bulan sekali. Biasanya, anak kucing membutuhkan perawatan cacing pita jika ia memiliki kutu. Sedangkan, untuk kucing dewasa, berikan perawatan setiap satu hingga tiga bulan untuk mengatasi cacing pita dan cacing gelang. <br> <br> Mengatasi kucing cacingan sebenarnya cukup sederhana, hanya perlu memperhatikan beberapa penyebab kucing cacingan dan lebih menjaga kebersihan. Selain itu, agar kucing Anda terhindar dari penyakit cacingan, pastikan untuk selalu memberikannya makanan kucing yang bergizi',
    urlToImage: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1671502665/attached_image/penyebab-kucing-muntah-cacing-dan-penanganannya.jpg',
    url: 'https://www.purina.co.id/artikel/kucing/kesehatan/kucing-cacingan',
  },
  {
    id: '6',
    author: 'Farah Fadila',
    title: 'Beberapa Fakta Unik Tentang Kucing',
    description: 'Beberapa orang meyakini kucing merupakan salah satu hewan yang dapat meredakan stres ataupun mengurangi ketegangan sehabis melakukan pekerjaan. Jika diperhatikan, kucing cenderung suka bermalas-malasan seperti halnya kaum rebahan yang menganut gaya hidup pasif. <br> <br> Uniknya, fakta tersebut malah membuatnya semakin menarik untuk dipelihara. Hewan berkaki empat dengan suara khas meow ini dikenal akan kesetiaan dan kecerdasannya. Kucing yang memiliki reputasi hewan penyendiri ternyata memiliki beragam fakta unik. Kali ini kita akan membahas mengenai fakta unik tentang kucing yang perlu kamu ketahui. Kira-kira apa saja fakta unik tentang kucing? Simak ulasannya berikut ini, <br> <br> <span style="font-weight: bold; color: #2a4f82;">1. Tidak Bisa Merasakan Manis </span> <br>  Ternyata kucing merupakan hewan mamalia yang tidak bisa mengenali rasa manis. Padahal setiap mamalia memiliki gen yang bisa menerima rasa manis. Biasanya hewan mamalia memiliki reseptor di ujung sel perasa bernama T1R2 dan T1R3 untuk merasakan manis. Namun, sel perasa tersebut tidak berfungsi dengan baik pada kucing. Nah, itulah alasan mengapa kucing sebagai hewan mamalia tidak bisa merasakan manis. <br> <br> <span style="font-weight: bold; color: #2a4f82;">2. Menghabiskan 70% Hidupnya untuk Tidur</span> <br> Kucing kerap dijuluki sebagai hewan peliharaan pemalas. Grameds pasti lebih sering melihatnya tidur daripada bermain, bukan? Ya, kucing ternyata bisa menghabiskan waktu hanya untuk tidur selama 15-20 jam per hari. <br> <br> <span style="font-weight: bold; color: #2a4f82;">3. Dapat Berlari dengan Sangat Cepat</span> <br> Dalam keadaan terancam, kucing rumahan yang kerap kita temui dapat berlari dengan sangat cepat. Kemampuan kucing dalam urusan kecepatan tak perlu diragukan lagi. Kucing berlari untuk menangkap hewan atau menghindar dari berbagai ancaman berbahaya yang akan menimpa dirinya.',
    urlToImage: 'https://asset.kompas.com/crops/TKEvoNJgd6khrYE1gpZWErgTYjI=/0x87:1200x687/780x390/data/photo/2020/06/27/5ef73dd952cf5.jpg',
    url: 'https://www.gramedia.com/best-seller/fakta-unik-tentang-kucing/',
  },
  {
    id: '7',
    author: 'Ghina Aulia',
    title: 'Cara Mengatasi Kucing Stres',
    description: 'Menjaga kesehatan hewan merupakan salah satu tugas utama pemilik binatang berbulu satu ini. Langkah tersebut dilakukan, tentunya untuk keselamatan dan kelangsungan hidup kucing. <br> <br> Tak heran ketika pemilik berusaha menyediakan fasilitas terbaik untuk binatang peliharaannya. Mulai dari tempat tinggal yang mana, makanan sehat dan perawatan tambahan lainnya. Pada kesempatan ini, kami akan memberitahu Anda mengenai bagaimana cara mengatasi kucing stres. Dimana masalah ini sangat rentan dialami hewan peliharaan. Berikut adalah beberapa cara mengatasi kucing stres <br> <br> <span style="font-weight: bold; color: #2a4f82;">1. Perhatikan Kesehatan Kucing</span> <br> Ciri-ciri kucing yang mengalami stres kebanyakan dapat diidentifikasi dari kondisi fisik. Dengan demikian, Anda sudah seharusnya secara telaten memperhatikan kesehatan mereka. <br> <br> <span style="font-weight: bold; color: #2a4f82;">2. Cegah Kucing Stres ketika Kunjungan ke Dokter Hewan</span> <br> Layaknya anak-anak manusia, ternyata kucing juga tidak begitu senang diajak berkunjung ke dokter. Maka dari itu, Anda sebaiknya mempersiapkan agar hal tersebut terminimalisir. Salah satu upaya yang bisa dilakukan adalah dengan menempatkannya dengan nyaman pada carrier dan menghindari meletakkan di lantai. <br> <br> <span style="font-weight: bold; color: #2a4f82;">3. Ciptakan Waktu Makan yang Tenang</span> <br> Selain memberikan makanan bernutrisi, ternyata waktu makan juga penting untuk kucing. Anda sebaiknya mengatur jadwal dan tempo makan yang baik secara konsisten. Selain itu, pastikan peralatan yang digunakan juga aman. Tak lupa suasana tempatnya juga tenang agar tidak mengganggu suasana hati mereka. <br> <br> <span style="font-weight: bold; color: #2a4f82;">4. Jangan Batasi Interaksi Kucing</span> <br> Sebagai pemilik yang merawat, sebaiknya Anda tidak menciptakan batasan tertentu untuk kucing berinteraksi secara sosial. Selain itu, jangan juga dipaksa. Misalnya seperti disuruh bermain dengan kucing lain atau digendong oleh orang yang tidak dikenal oleh binatang peliharaan. Hal ini dipercaya dapat membuat anak bulu lebih tenang dan ramah.',
    urlToImage: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1663838140/attached_image/9-ciri-kucing-stres-dan-cara-terbaik-menanganinya.jpg',
    url: 'https://katadata.co.id/intan/berita/63491bbcd2733/cara-mengatasi-kucing-stres-beserta-ciri-cirinya',
  },
  {
    id: '8',
    author: 'Purina',
    title: 'Kenapa Kucing Takut Timun?',
    description: 'Ini dia yang menjadi perhatian dan pertanyaan terbesar, kenapa kucing takut sama timun? Jawabannya karena timun memiliki penampilan yang menyerupai ular atau reptil yang membuat respon mereka menjadi kaget dan juga waspada. Untuk kita, reaksi ini adalah reaksi yang sangat menggemaskan, namun ternyata hal ini sudah menjadi genetik turun temurun lho. <br> <br> Penjelasan lainnya yang bisa menjawab kenapa kucing takut timun adalah murni karena kaget, karena timun yang diam-diam ada di sekitarnya yang membuatnya berpikir timun sebagai ancaman. Tak hanya kucing ataupun timun, manusia dengan benda lain pun akan memberikan respon yang sama ketika kaget. <br> <br> Bolehkah mengagetkan kucing dengan timun?. Meskipun reaksi kucing yang kaget sangatlah menggemaskan, namun mengagetkan kucing dengan timun atau benda-benda lainnya sangat tidak disarankan. Hal ini bisa menimbulkan masalah kepercayaan antara kucing dengan manusia, yang pastinya akan merugikan sang pemilik kucing tersebut. Terlebih lagi, rasa kaget dan takut yang terus menerus bisa membuat kucing merasa stress dan menimbulkan berbagai permasalahan, salah satunya permasalahan pencernaan. Jadi, hindari mengagetkan kucing dengan timun ataupun barang-barang lainnya.',
    urlToImage: 'https://i.ytimg.com/vi/yIC0p5vEPyw/maxresdefault.jpg',
    url: 'https://www.purina.co.id/artikel/kucing/perilaku/memahami-kucing/takut-timun',
  },
  {
    id: '9',
    author: 'Ani Mardatila',
    title: 'Siklus Hidup Kucing',
    description: 'Banyak yang mengira bahwa siklus hidup kucing hanya terdiri dari tiga fase: bayi kucing, kucing remaja, dan kucing dewasa. Kenyataannya, umumnya siklus hidup kucing terbagi menjadi empat fase: anak kucing, kucing remaja, kucing dewasa, dan kucing senior atau geriatri. Berikut adalah penjelasan mengenai siklus hidup kucing. <br> <br> <span style="font-weight: bold; color: #2a4f82;">1. Anak Kucing (0-1 tahun)</span> <br> Siklus hidup kucing yang pertama adalah anak kucing. Kisaran usia anak kucing adalah sejak mereka lahir hingga berusia sekitar satu tahun. Bayi kucing yang baru saja lahir tidak boleh mengalami kontak langsung dengan manusia. Anak kucing terlahir dalam keadaan buta dan tuli. Mereka baru bisa membuka mata saat berusia 8 hingga 10 hari. Sejak lahir, induk kucing hanya akan memberinya air susu ibu hingga berusia 6-7 minggu. <br> <br> <span style="font-weight: bold; color: #2a4f82;">2. Kucing Remaja (1-6 tahun)</span> <br> Pada siklus hidup kucing yang satu ini, kucing mengalami kematangan seksual pada usia 10-15 bulan. <br> <br> <span style="font-weight: bold; color: #2a4f82;">3. Kucing Dewasa (7-10 tahun)</span> <br> Jika diibaratkan dengan usia manusia, kucing dewasa diibaratkan telah berusia 44-56 tahun. Mereka masih suka aktif bermain, namun tidak segesit saat masih remaja. Pada siklus hidup kucing yang satu ini, berat badan kucing cenderung bertambah serta bulunya tidak secerah dulu. <br> <br> <span style="font-weight: bold; color: #2a4f82;">4. Kucing Senior (>10 tahun)</span> <br> Siklus hidup kucing yang terakhir adalah kucing senior atau geriatri. Pada usia ini, kucing tidak lagi seaktif dulu dan lebih suka menghabiskan waktu dengan tidur. Tubuhnya akan lemah dan bulunya akan rontok sehingga perlu pengawasan lebih lanjut.',
    urlToImage: 'https://www.sipintar.net/wp-content/uploads/2023/01/Daur-Hidup-Kucing.jpg',
    url: 'https://www.merdeka.com/sumut/siklus-hidup-kucing-lengkap-beserta-penjelasannya-kln.html',
  },

];

export default articles;