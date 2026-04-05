# Skanda Industries Context

## Business Domain
Skanda Industries is a leading company specializing in **Home Interiors, Renovation, and Construction**. We provide high-end, premium services aimed at creating beautiful, functional, and deeply personalized living spaces.

## Architectural Design: The `config.js` Approach
This application is designed with a centralized configuration approach. 

The **`src/config.js`** file acts as the single source of truth for all business-related information, including:
- Company Details (Name, Phone, Email, Physical Address)
- Branding (Logo paths, Taglines, Social Links)
- Services Offered (Descriptions, Images, Icons)
- Testimonials and Portfolio Highlights

**Why this approach?**
By decoupling the data from the UI components, anyone can change the website's content, contact information, or core offerings by simply modifying one file at a single location (`src/config.js`). The entire React application will instantly reflect these changes without requiring deep dives into component code.
