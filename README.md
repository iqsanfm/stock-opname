# Stock Opname API

Backend API untuk aplikasi stock opname dengan autentikasi.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Setup environment variables:
```bash
cp .env.example .env
# Edit .env dengan kredensial MongoDB dan JWT secret
```

3. Run server:
```bash
npm run dev  # Development mode
npm start    # Production mode
```

## Deploy to Vercel

1. Push code ke GitHub repository

2. Connect repository ke Vercel dashboard

3. Set environment variables di Vercel:
   - `MONGODB_URI`: Connection string MongoDB Atlas
   - `DB_NAME`: Nama database
   - `JWT_SECRET`: Secret key untuk JWT
   - `JWT_EXPIRE`: Durasi expire token (default: 7d)

4. Deploy otomatis akan berjalan

## API Endpoints

- `POST /api/auth/register` - Register user baru
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (require token)

## MongoDB Atlas

Database MongoDB Atlas sudah bisa diakses dari Vercel. Pastikan:
1. IP Address di MongoDB Atlas diset ke `0.0.0.0/0` (allow all)
2. Connection string sudah benar dengan password yang di-encode