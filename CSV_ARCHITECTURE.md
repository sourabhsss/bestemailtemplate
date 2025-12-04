# CSV Data Architecture Documentation

## 📋 Overview

Your project uses two CSV files to manage a large collection of email templates organized by categories/industries.

```
data/
├── categories.csv    (12 categories)
└── templates.csv     (575+ templates)
```

---

## 🗂️ File Structures

### **categories.csv** (12 rows)

Defines the main industry/category classifications for organizing templates.

| Column | Description | Example |
|--------|-------------|---------|
| `Listing Name` | Display name of category | "Fashion", "Education" |
| `URL Path` | URL-friendly slug | "fashion", "education" |
| `Collection ID` | Webflow collection ID | "66851ff5597edd9f7c0cbee8" |
| `Locale ID` | Localization identifier | "66851ff5597edd9f7c0cbdde" |
| `Item ID` | Unique category ID | "66851ff5597edd9f7c0cc415" |
| `Created On` | Creation timestamp | "Mon Jun 24 2024..." |
| `Updated On` | Last update timestamp | "Mon Jun 24 2024..." |
| `Published On` | Publication timestamp | "Fri Jul 05 2024..." |
| `H1` | SEO-optimized heading | "Trustworthy Finance HTML..." |
| `Listing Description` | Full category description | "Convey financial expertise..." |
| `Meta Description` | SEO meta description | "Convey financial expertise..." |
| `Related Slugs` | Semicolon-separated template slugs | "finance-digital-spend-card; ..." |

**Categories Available**:
1. Finance
2. Education
3. Healthcare
4. Real Estate
5. Software & Digital Services
6. Beauty & Personal Care
7. Fashion
8. Ecommerce
9. Restaurants, Food & Beverages
10. Travel & Leisure
11. Transactional

---

### **templates.csv** (575+ rows)

Contains detailed information about each email template.

| Column | Description | Example |
|--------|-------------|---------|
| `Title` | Template display name | "YETI King Crab Collection..." |
| `Slug` | URL-friendly identifier | "yeti-king-crab-collection..." |
| `Collection ID` | Webflow collection ID | "66851ff5597edd9f7c0cbee7" |
| `Item ID` | Unique template ID | "66851ff5597edd9f7c0cc212" |
| `Template Image` | Thumbnail image URL | "https://uploads-ssl.webflow..." |
| `Heading (H1)` | SEO heading | "YETI King Crab Collection..." |
| `Description` | Template description | "This email template promotes..." |
| `Image URL` | Additional image URL | URL or empty |
| `Figma Link` | Design file link | "https://www.figma.com/..." |
| `Use Case` | Use case category | "Product Launch", "Discounts..." |
| `Type` | Email type | "Marketing", "User Lifecycle" |
| **`Industry`** | **PRIMARY CATEGORY LINK** | "Fashion", "Education", etc. |
| `Supported Email Clients` | Compatible clients | "Gmail, Yahoo!, Apple Mail" |
| `Supported ESPs` | Compatible ESPs | "MailChimp, HubSpot, Brevo" |
| `Meta Description` | SEO meta | "Bold HTML email template..." |
| `Full URL` | Complete URL path | "/email-template/yeti-king..." |
| `Related Templates` | Semicolon-separated slugs | "fashion-welcome-summer; ..." |

---

## 🔗 Data Relationships

### **1. Primary Relationship: Industry → Category**

```
┌─────────────────────────────────────────────────────────┐
│                    CATEGORIES.csv                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Listing Name: "Fashion"                         │   │
│  │ URL Path: "fashion"                             │   │
│  │ Description: "Stylish Fashion HTML Email..."    │   │
│  └─────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Connected by matching
                         │ "Industry" field
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                    TEMPLATES.csv                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Title: "Year Start Gifting Ideas..."           │   │
│  │ Industry: "Fashion"  ◄── MATCHES CATEGORY      │   │
│  │ Use Case: "New Year"                           │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Title: "Winter Collection Sale..."             │   │
│  │ Industry: "Fashion"  ◄── MATCHES CATEGORY      │   │
│  │ Use Case: "Winter"                             │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Relationship Type**: One-to-Many
- 1 Category → Many Templates
- Each template belongs to 1 primary industry/category

---

### **2. Related Content Network**

Both files create a **many-to-many relationship** through related slugs:

```
CATEGORIES.csv                    TEMPLATES.csv
┌──────────────────┐             ┌──────────────────┐
│ Related Slugs:   │             │ Related          │
│ - template-a     │◄───────────►│ Templates:       │
│ - template-b     │             │ - template-x     │
│ - template-c     │             │ - template-y     │
└──────────────────┘             └──────────────────┘
```

This creates a recommendation/discovery system where:
- Categories suggest related templates
- Templates suggest other related templates
- Forms a content discovery graph

---

## 🏷️ Template Tagging System

Each template has **multiple tags** across different dimensions, creating a flexible filtering system:

```
Template: "YETI King Crab Collection"
  │
  ├── 📁 Industry Tag (Primary Category)
  │   └── "Ecommerce"
  │
  ├── 🎯 Use Case Tags
  │   └── "Product Launch"
  │
  ├── 📧 Type Tags
  │   └── "Marketing"
  │
  ├── 💻 Email Client Tags
  │   └── ["Gmail", "Yahoo!", "Apple Mail"]
  │
  └── 🔌 Integration Tags (ESPs)
      └── ["HubSpot", "Zoho Mail", "Brevo", "GetResponse", ...]
```

### **Available Tag Collections**:

#### **Use Case Tags** (What the email is for)
- Discounts & Coupons
- Product Promotions & Updates
- Webinar
- Retargeting & Triggers
- Abandoned Cart
- Welcome
- Thank You
- Activation & Retention
- Survey & Feedback
- Invoice
- Order Confirmation
- Pricing Plans
- Product Launch
- Events & Invitations
- Newsletter
- Notifications & Acknowledgement
- Reminders
- (+ Seasonal: Halloween, Christmas, New Year, Black Friday, etc.)

#### **Industry Tags** (Primary Categories)
- Restaurants, Food & Beverages
- Travel & Leisure
- Ecommerce
- Fashion
- Beauty & Personal Care
- Software & Digital Services
- Real Estate
- Healthcare
- Education
- Finance

#### **Type Tags** (Email purpose)
- Marketing
- User Lifecycle
- Transactional
- Announcements / Communications
- Festive

#### **Email Client Tags** (Compatibility)
- Gmail
- Apple Mail
- Outlook
- Yahoo!

#### **Integration Tags** (ESP Support)
- MailChimp
- Brevo
- Zoho Mail
- Klaviyo
- HubSpot
- Constant Contact
- Active Campaign
- Campaign Monitor
- Moosend
- Mailjet
- GetResponse
- Salesforce

This multi-tag system allows users to filter templates by any combination of criteria.

---

## 🔍 Working with Tags

### **Extracting Unique Tags**

```typescript
import { getTemplates } from '@/lib/templates-data';

const templates = getTemplates();

// Get all unique use cases
const useCases = [...new Set(templates.map(t => t.useCase))];

// Get all unique industries
const industries = [...new Set(templates.map(t => t.industry))];

// Get all unique types
const types = [...new Set(templates.map(t => t.type))];

// Get all unique email clients (flattened from arrays)
const emailClients = [...new Set(
  templates.flatMap(t => t.supportedEmailClients)
)];

// Get all unique ESPs
const esps = [...new Set(
  templates.flatMap(t => t.supportedESPs)
)];
```

### **Filtering by Tags**

```typescript
// Filter by single tag
const discountTemplates = templates.filter(t => 
  t.useCase.includes('Discounts')
);

// Filter by multiple tags (AND logic)
const fashionMarketingTemplates = templates.filter(t =>
  t.industry === 'Fashion' && 
  t.type === 'Marketing'
);

// Filter by tag array (email client support)
const gmailCompatible = templates.filter(t =>
  t.supportedEmailClients.includes('Gmail')
);

// Complex multi-tag filter
const holidayFashionDiscounts = templates.filter(t =>
  t.industry === 'Fashion' &&
  t.useCase.includes('Discounts') &&
  t.type === 'Festive' &&
  t.supportedEmailClients.includes('Gmail')
);
```

### **Building Filter UI**

```typescript
// Create filter options for UI
const filterOptions = {
  useCases: [...new Set(templates.map(t => t.useCase))].sort(),
  industries: [...new Set(templates.map(t => t.industry))].sort(),
  types: [...new Set(templates.map(t => t.type))].sort(),
  emailClients: [...new Set(templates.flatMap(t => t.supportedEmailClients))].sort(),
  esps: [...new Set(templates.flatMap(t => t.supportedESPs))].sort(),
};

// Use in a filter component
function TemplateFilters({ onFilterChange }) {
  return (
    <div>
      <select onChange={(e) => onFilterChange('industry', e.target.value)}>
        {filterOptions.industries.map(industry => (
          <option key={industry} value={industry}>{industry}</option>
        ))}
      </select>
      {/* More filter dropdowns... */}
    </div>
  );
}
```

---

## 💻 Code Usage Examples

### **Get all templates for a category**
```typescript
import { getTemplatesByCategory } from '@/lib/templates-data';

const fashionTemplates = getTemplatesByCategory('Fashion');
// Returns all templates where Industry = "Fashion"
```

### **Get category details**
```typescript
import { getCategoryByName } from '@/lib/templates-data';

const category = getCategoryByName('Fashion');
console.log(category.h1); // "Stylish Fashion HTML Email Templates..."
console.log(category.listingDescription);
```

### **Get specific template**
```typescript
import { getTemplateById } from '@/lib/templates-data';

const template = getTemplateById('yeti-king-crab-collection-html-template');
console.log(template.title);
console.log(template.industry); // "Ecommerce"
```

### **Get related templates**
```typescript
import { getRelatedTemplates } from '@/lib/templates-data';

const related = getRelatedTemplates('yeti-king-crab-collection-html-template');
// Returns array of related template objects
```

### **Filter by multiple criteria**
```typescript
import { getTemplates } from '@/lib/templates-data';

const templates = getTemplates();

// Fashion templates with discount use case
const fashionDiscounts = templates.filter(t => 
  t.industry === 'Fashion' && 
  t.useCase.includes('Discounts')
);

// Templates supporting Gmail
const gmailTemplates = templates.filter(t =>
  t.supportedEmailClients.includes('Gmail')
);
```

---

## 🔍 Data Statistics

- **Total Categories**: 12
- **Total Templates**: 575+
- **Average Templates per Category**: ~48
- **Use Cases**: 20+ different use cases
- **Email Types**: 5+ types (Marketing, User Lifecycle, Festive, etc.)
- **Supported Clients**: Gmail, Outlook, Yahoo!, Apple Mail
- **Supported ESPs**: 12+ platforms (MailChimp, HubSpot, Klaviyo, etc.)

---

## 🎨 How The Collection Forms

```
┌─────────────────────────────────────────────────────────┐
│              LARGE TEMPLATE COLLECTION                  │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Fashion    │  │  Education   │  │  Healthcare  │ │
│  │  (48 items)  │  │  (52 items)  │  │  (15 items)  │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  Ecommerce   │  │   Travel     │  │   Finance    │ │
│  │  (95 items)  │  │  (32 items)  │  │   (6 items)  │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                         │
│  ... and 6 more categories                             │
│                                                         │
│  Each template has:                                    │
│  • Multiple classification dimensions                  │
│  • Related template connections                        │
│  • Rich metadata (images, descriptions, links)         │
│  • Technical specifications (clients, ESPs)            │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Key Insights

1. **Industry field is the primary connector** between categories and templates
2. **Related slugs create a discovery network** for content recommendations
3. **Multi-dimensional classification** allows flexible filtering and search
4. **Rich metadata** supports SEO, previews, and user experience
5. **Technical specifications** help users find compatible templates

---

## 🚀 Next Steps

You can now:
1. ✅ Query templates by category
2. ✅ Get category information
3. ✅ Find related templates
4. ✅ Filter by multiple criteria
5. ✅ Build category pages
6. ✅ Build template detail pages
7. ✅ Create recommendation systems

All data is now accessible through the utility functions in `lib/csv-utils.ts`!