# Email Template Tagging System

## 🏷️ Overview

Each email template in the collection has **multiple tags** across 5 different dimensions, creating a powerful multi-dimensional filtering system.

```
┌─────────────────────────────────────────────────────────────┐
│                    SINGLE TEMPLATE                          │
│  "YETI King Crab Collection HTML Email Template"           │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Has multiple tags
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Industry   │    │   Use Case   │    │     Type     │
│  "Ecommerce" │    │   "Product   │    │  "Marketing" │
│              │    │    Launch"   │    │              │
└──────────────┘    └──────────────┘    └──────────────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
        ▼                                       ▼
┌──────────────────────┐            ┌──────────────────────┐
│   Email Clients      │            │   Integrations       │
│  - Gmail             │            │  - HubSpot           │
│  - Yahoo!            │            │  - Klaviyo           │
│  - Apple Mail        │            │  - MailChimp         │
└──────────────────────┘            └──────────────────────┘
```

---

## 📊 Tag Dimensions

### **1. Industry (Primary Category)**
The main business category the template is designed for.

**Purpose**: Primary classification
**Type**: Single value per template
**Examples**: 
- Fashion
- Ecommerce
- Education
- Healthcare
- Finance

**In CSV**: `Industry - Template` column

---

### **2. Use Case**
What the email is used for or when it should be sent.

**Purpose**: Functional classification
**Type**: Single value per template
**Examples**:
- Product Launch
- Discounts & Coupons
- Welcome
- Abandoned Cart
- Order Confirmation
- Newsletter
- Events & Invitations

**In CSV**: `Use Case - Template` column

---

### **3. Type**
The broader email marketing category.

**Purpose**: Marketing classification
**Type**: Single value per template
**Examples**:
- Marketing
- User Lifecycle
- Transactional
- Announcements / Communications
- Festive

**In CSV**: `Type - Template` column

---

### **4. Email Clients**
Which email clients the template is tested and compatible with.

**Purpose**: Technical compatibility
**Type**: Multiple values (array)
**Examples**:
- Gmail
- Outlook
- Apple Mail
- Yahoo!

**In CSV**: `Supported Email Clients - Template` column (comma-separated)

---

### **5. Integrations (ESPs)**
Which Email Service Providers support this template.

**Purpose**: Platform compatibility
**Type**: Multiple values (array)
**Examples**:
- MailChimp
- HubSpot
- Klaviyo
- Brevo
- Constant Contact

**In CSV**: `Supported ESPs - Template` column (comma-separated)

---

## 🎯 How Tags Enable Filtering

### **Single Tag Filter**
```
User selects: Industry = "Fashion"
Result: All fashion templates (48 templates)
```

### **Multi-Tag Filter (AND logic)**
```
User selects: 
  - Industry = "Fashion"
  - Use Case = "Discounts & Coupons"
  - Email Client = "Gmail"

Result: Fashion discount templates compatible with Gmail (12 templates)
```

### **Tag Combination Examples**

| Industry | Use Case | Type | Result |
|----------|----------|------|--------|
| Fashion | Product Launch | Marketing | New fashion collection announcements |
| Ecommerce | Abandoned Cart | User Lifecycle | Cart recovery emails |
| Education | Welcome | User Lifecycle | Student/teacher onboarding |
| Healthcare | Order Confirmation | Transactional | Appointment confirmations |
| Restaurants | Discounts & Coupons | Marketing | Food delivery promos |

---

## 🔍 Filter UI Pattern

```
┌─────────────────────────────────────────────────────────┐
│  FILTER TEMPLATES                                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Use Case:        [Dropdown: All Use Cases ▼]          │
│  Industry:        [Dropdown: All Industries ▼]         │
│  Type:            [Dropdown: All Types ▼]              │
│  Email Client:    [Dropdown: All Clients ▼]            │
│  Integration:     [Dropdown: All ESPs ▼]               │
│                                                         │
│  [Apply Filters]  [Clear All]                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Showing 48 of 575 templates                           │
└─────────────────────────────────────────────────────────┘
```

---

## 💡 Tag Benefits

### **For Users**
✅ Find exactly what they need quickly
✅ Discover templates by multiple criteria
✅ Filter by technical requirements (email clients, ESPs)
✅ Browse by business need (use case, industry)

### **For Developers**
✅ Flexible querying system
✅ Easy to add new tags
✅ Supports complex filtering logic
✅ Scalable architecture

### **For Business**
✅ Better user experience
✅ Improved template discovery
✅ Higher conversion rates
✅ Data-driven insights on popular combinations

---

## 📈 Tag Statistics

Based on the 575+ templates in the collection:

| Tag Dimension | Unique Values | Most Common |
|---------------|---------------|-------------|
| Industry | 12 | Ecommerce (~95 templates) |
| Use Case | 20+ | Discounts & Coupons |
| Type | 5 | Marketing |
| Email Clients | 4 | Gmail |
| Integrations | 12+ | MailChimp, HubSpot |

---

## 🔄 Tag Relationships

### **Common Tag Combinations**

```
Fashion + Discounts & Coupons + Festive
└─> Holiday sales, seasonal promotions

Ecommerce + Abandoned Cart + User Lifecycle  
└─> Cart recovery sequences

Education + Welcome + User Lifecycle
└─> Student onboarding flows

Healthcare + Order Confirmation + Transactional
└─> Appointment confirmations

Software + Product Launch + Marketing
└─> Feature announcements
```

---

## 🛠️ Implementation Guide

### **Step 1: Extract All Tags**
```typescript
const allTags = {
  industries: getUniqueIndustries(),
  useCases: getUniqueUseCases(),
  types: getUniqueTypes(),
  emailClients: getUniqueEmailClients(),
  esps: getUniqueESPs()
};
```

### **Step 2: Build Filter State**
```typescript
const [filters, setFilters] = useState({
  industry: null,
  useCase: null,
  type: null,
  emailClient: null,
  esp: null
});
```

### **Step 3: Apply Filters**
```typescript
const filteredTemplates = templates.filter(template => {
  if (filters.industry && template.industry !== filters.industry) return false;
  if (filters.useCase && template.useCase !== filters.useCase) return false;
  if (filters.type && template.type !== filters.type) return false;
  if (filters.emailClient && !template.supportedEmailClients.includes(filters.emailClient)) return false;
  if (filters.esp && !template.supportedESPs.includes(filters.esp)) return false;
  return true;
});
```

### **Step 4: Display Results**
```typescript
<div>
  <p>Showing {filteredTemplates.length} of {templates.length} templates</p>
  <TemplateGrid templates={filteredTemplates} />
</div>
```

---

## 🎨 Visual Tag Display

Each template card can show its tags:

```
┌────────────────────────────────┐
│  [Template Thumbnail]          │
│                                │
│  YETI King Crab Collection     │
│  ────────────────────────────  │
│  📁 Ecommerce                  │
│  🎯 Product Launch             │
│  📧 Marketing                  │
│  ✉️  Gmail • Outlook • Yahoo!  │
│  🔌 HubSpot • Klaviyo          │
│                                │
│  [View Template →]             │
└────────────────────────────────┘
```

---

## 🚀 Advanced Features

### **Tag-Based Search**
```typescript
// Search by tag keywords
const searchByTags = (query: string) => {
  return templates.filter(t =>
    t.industry.toLowerCase().includes(query) ||
    t.useCase.toLowerCase().includes(query) ||
    t.type.toLowerCase().includes(query)
  );
};
```

### **Related Templates by Tags**
```typescript
// Find similar templates based on shared tags
const findSimilar = (template: Template) => {
  return templates.filter(t =>
    t.id !== template.id &&
    (t.industry === template.industry ||
     t.useCase === template.useCase ||
     t.type === template.type)
  ).slice(0, 4);
};
```

### **Tag Analytics**
```typescript
// Most popular tag combinations
const getPopularCombinations = () => {
  const combinations = {};
  templates.forEach(t => {
    const key = `${t.industry}|${t.useCase}`;
    combinations[key] = (combinations[key] || 0) + 1;
  });
  return Object.entries(combinations)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);
};
```

---

## ✨ Summary

The tagging system creates a **multi-dimensional classification** that allows:
- ✅ Precise filtering by business need
- ✅ Technical compatibility checking
- ✅ Flexible discovery paths
- ✅ Scalable architecture
- ✅ Rich user experience

Each template can be found through multiple pathways, ensuring users always find what they need!