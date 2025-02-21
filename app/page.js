import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Head>
        <title>CV Mirna Anjani</title>
        <meta name="description" content="Curriculum Vitae Mirna Anjani" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {/* Foto Profil */}
          <img
            src="mirna.jpeg" // Ganti dengan foto asli kamu
            alt="Foto Profil"
            style={{
              borderRadius: '50%',
              width: '150px',
              height: '150px',
              objectFit: 'cover',
            }}
          />
          <h1 style={{ color: '#333', marginTop: '10px' }}>
            Mirna Anjani
          </h1>
          <p style={{ color: '#777' }}>Sumedang, 10 April 2005</p>
        </div>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#444' }}>Informasi Pribadi</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
            <li><strong>Nama:</strong> Mirna Anjani</li>
            <li><strong>Tempat & Tanggal Lahir:</strong> Sumedang, 10 April 2005</li>
            <li><strong>Alamat:</strong> Perum Puteraco, Kabupaten Sumedang</li>
            <li><strong>Telepon:</strong> 085720662865</li>
            <li><strong>Email:</strong> manjni2005@gmail.com</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#444' }}>Riwayat Pendidikan</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
            <li>SDN Pasir Huni</li>
            <li>SMPN Cimanggung</li>
            <li>SMAN Cimanggung</li>
            <li>Saat ini kuliah di Universitas Masoem Bandung</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#444' }}>Pengalaman Organisasi</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
            <li>Anggota OSIS di SMP dan SMA</li>
            <li>Anggota Palang Merah Remaja (PMR)</li>
            <li>Anggota Paskibra</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#444' }}>Hobi</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
            <li>Memasak</li>
            <li>Membaca</li>
          </ul>
        </section>
      </main>

      <footer style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        textAlign: 'center',
        fontSize: '0.9rem',
      }}>
        <p>&copy; 2025 Mirna Anjani</p>
      </footer>
    </div>
  )
}
