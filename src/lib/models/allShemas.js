import mongoose from "mongoose";

// Price Schema
const PriceSchema = new mongoose.Schema({
  category: { type: String, required: true }, // Added "category"
  name: { type: String, required: true },
  value: { type: String, required: true }, // Changed from "amount" and "currency" to a single "value" field
});

// AgeRestriction Schema
const AgeRestrictionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// TermsCondition Schema
const TermsConditionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// CancellationPolicy Schema
const CancellationPolicySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// OpeningTime Schema
const OpeningTimeSchema = new mongoose.Schema({
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  month: { type: String, required: true }, // Changed "openingMonth" to "month"
});

// Itinerary Schema
const ItinerarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: null },
    about: { type: String, default: null },
    rating: { type: Number, default: null }, // Changed from String to Number
    prices: [PriceSchema], // Embedded prices
    ageRestrictions: [AgeRestrictionSchema], // Embedded age restrictions
    termsConditions: [TermsConditionSchema], // Embedded terms and conditions
    cancellationPolicies: [CancellationPolicySchema], // Embedded cancellation policies
    openingTimes: [OpeningTimeSchema], // Embedded opening times
    location: { type: String, default: null },
    categories: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "Itinerary",
    timestamps: true,
  }
);

// Accommodation Schema
const AccommodationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    about: { type: String, default: null },
    rating: { type: Number, default: null }, // Changed from String to Number
    prices: [PriceSchema], // Embedded prices
    ageRestrictions: [AgeRestrictionSchema], // Embedded age restrictions
    termsConditions: [TermsConditionSchema], // Embedded terms and conditions
    cancellationPolicies: [CancellationPolicySchema], // Embedded cancellation policies
    openingTimes: [OpeningTimeSchema], // Embedded opening times
    location: { type: String, default: null }, // Changed from locations array to single location string
    accomodationType: { type: String, default: null }, // Added accomodationType field
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "Accommodation",
    timestamps: true,
  }
);

// AccommodationType Schema
const AccommodationTypeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "AccommodationType",
    timestamps: true,
  }
);

// Category Schema
const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "Category",
    timestamps: true,
  }
);

// User Schema
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, unique: true, default: null },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "User",
    timestamps: true,
  }
);

// Export all models
export const Itinerary =
  mongoose.models.Itinerary || mongoose.model("Itinerary", ItinerarySchema);
export const Accommodation =
  mongoose.models.Accommodation ||
  mongoose.model("Accommodation", AccommodationSchema);
export const AccommodationType =
  mongoose.models.AccommodationType ||
  mongoose.model("AccommodationType", AccommodationTypeSchema);
export const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
