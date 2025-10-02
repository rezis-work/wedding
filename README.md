# Wedding RSVP System

A beautiful and functional wedding RSVP system built with Next.js, Supabase, and Tailwind CSS. Guests can easily RSVP through a form, and administrators can view and manage responses through a secure dashboard.

## Features

- **Guest RSVP Form**: Clean, responsive form for guests to submit their RSVP
- **Server Actions**: Secure form submission using Next.js server actions
- **Admin Dashboard**: View all guest responses with filtering and search
- **Real-time Data**: Connected to Supabase for reliable data storage
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Authentication**: Simple admin authentication system

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for database and backend
- **Server Actions** for form handling

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project dashboard
3. Create a new table called `weeding-guests` with the following schema:

```sql
CREATE TABLE "weeding-guests" (
  id BIGSERIAL PRIMARY KEY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  are_you_coming BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

4. Get your project URL and anon key from Settings > API

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Admin Configuration (optional - defaults to admin@wedding.com if not set)
ADMIN_EMAIL=your_admin_email@example.com

# JWT Secret for authentication (generate a secure random string)
JWT_SECRET_KEY=your_super_secure_jwt_secret_key_here
```

Replace the placeholder values with your actual Supabase credentials.

### 4. Configure Database Permissions

In your Supabase dashboard, you need to allow public access to insert into the guests table:

1. Go to **Authentication** > **Policies** in your Supabase dashboard
2. Click **"New Policy"** on the `weeding-guests` table
3. Choose **"For full customization"**
4. Create an **INSERT** policy with this SQL:

```sql
CREATE POLICY "Allow public insert on weeding-guests" ON "public"."weeding-guests"
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (true);
```

5. Create a **SELECT** policy for admin access:

```sql
CREATE POLICY "Allow public select on weeding-guests" ON "public"."weeding-guests"
AS PERMISSIVE FOR SELECT
TO public
USING (true);
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the RSVP form.

## Usage

### Guest RSVP

- Visit the main page to see the wedding invitation and RSVP form
- Fill in first name, last name, and indicate if attending
- Submit the form to save the response

### Admin Dashboard

- Visit `/admin/login` to access the admin area
- **Admin Credentials:**
  - Email: `admin@wedding.com`
  - Password: `wedding2024`
- View all guest responses with statistics
- Filter by attendance status
- Search by name
- Refresh data to see new submissions
- Secure logout functionality

### Setting up Supabase Authentication

1. **Create Admin User in Supabase:**

   - Go to your Supabase dashboard
   - Navigate to **Authentication** > **Users**
   - Click **"Add user"**
   - Create a user with:
     - Email: `admin@wedding.com`
     - Password: `wedding2024`
     - Confirm the user

2. **Alternative: Use SQL to create admin user:**
   ```sql
   INSERT INTO auth.users (
     instance_id,
     id,
     aud,
     role,
     email,
     encrypted_password,
     email_confirmed_at,
     created_at,
     updated_at,
     confirmation_token,
     email_change,
     email_change_token_new,
     recovery_token
   ) VALUES (
     '00000000-0000-0000-0000-000000000000',
     gen_random_uuid(),
     'authenticated',
     'authenticated',
     'admin@wedding.com',
     crypt('wedding2024', gen_salt('bf')),
     NOW(),
     NOW(),
     NOW(),
     '',
     '',
     '',
     ''
   );
   ```

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── login/page.tsx     # Admin login page
│   │   └── page.tsx           # Admin dashboard
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main RSVP page
├── components/
│   ├── AdminDashboard.tsx     # Admin dashboard component
│   └── RSVPForm.tsx          # RSVP form component
├── lib/
│   ├── actions.ts             # Server actions for database operations
│   └── supabase.ts           # Supabase client configuration
└── types/
    └── database.ts            # TypeScript types for database schema
```

## Customization

### Changing the Admin Credentials

1. **Update the ADMIN_EMAIL environment variable:**
   Set `ADMIN_EMAIL=your_admin_email@example.com` in your `.env.local` file

2. **Create a new user in Supabase** with your desired email and password

### Styling

The app uses Tailwind CSS. You can customize colors, fonts, and layout by modifying the className attributes in the components.

### Form Fields

To add more fields to the RSVP form:

1. Update the database schema in Supabase
2. Modify the `Guest` type in `src/types/database.ts`
3. Update the form component and server actions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Make sure to set your environment variables in your deployment platform and ensure your Supabase project allows connections from your domain.

## Security Notes

- **Supabase authentication** with secure session management
- **HttpOnly cookies** for session storage (secure from XSS)
- **Middleware protection** for admin routes
- **No registration system** - single admin user only
- **Server-side validation** for all authentication
- **Environment variable protection** for Supabase keys
- Consider adding rate limiting for the RSVP form in production

## Support

If you encounter any issues:

1. Check that your Supabase credentials are correct
2. Ensure your database table schema matches the expected structure
3. Verify that your environment variables are properly set
4. Check the browser console and server logs for error messages

Happy wedding planning! 💒
