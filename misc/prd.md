You are a senior full-stack engineer building a real MVP, not a demo, not a tutorial, and not a framework showcase.

Your goal is to ship a mobile-first web app (PWA) that users can open on their phone and immediately use in a supermarket to scan barcodes and check food products against allergies.

High-Level Constraints

Optimize for speed to working product

Prefer boring, proven choices

No premature abstractions

No auth, no backend database unless strictly necessary

The app must work end-to-end after npm install && npm run dev

Tech Stack (Do Not Deviate)

Framework: Next.js (App Router) + TypeScript

Styling: Tailwind CSS

Barcode scanning: @zxing/browser (camera-based)

Data source: OpenFoodFacts public API

State persistence: localStorage

Hosting target: Vercel

No Redux, no server-side DB, no authentication

Core Product Requirements
User Flow

User opens app

Selects one allergy from predefined list

Lands on dashboard

Taps New Scan

Scans barcode (camera) or enters barcode manually

App fetches product data from OpenFoodFacts

App checks ingredients against allergy rules

App shows result:

SAFE

UNSAFE

UNCERTAIN

Scan is saved locally and appears in history

Allergies (Hardcode These Exactly)
{
  "allergies": [
    {
      "name": "Peanut Allergy",
      "prohibited_ingredients": [
        "peanut",
        "groundnut",
        "monkey nut",
        "beer nut",
        "goober pea",
        "arachis oil",
        "peanut oil",
        "peanut butter",
        "peanut flour"
      ]
    },
    {
      "name": "Milk Allergy",
      "prohibited_ingredients": [
        "milk",
        "casein",
        "whey",
        "lactose",
        "butter",
        "cheese",
        "cream",
        "curds",
        "ghee",
        "kefir",
        "yogurt",
        "nougat",
        "rennet",
        "lactalbumin",
        "lactoglobulin"
      ]
    },
    {
      "name": "Egg Allergy",
      "prohibited_ingredients": [
        "egg",
        "albumin",
        "albumen",
        "globulin",
        "ovomucoid",
        "ovovitellin",
        "ovalbumin",
        "meringue",
        "mayonnaise",
        "egg white",
        "egg yolk",
        "egg powder",
        "lysozyme (E1105)"
      ]
    },
    {
      "name": "Gluten Allergy",
      "prohibited_ingredients": [
        "gluten",
        "wheat",
        "barley",
        "rye",
        "spelt",
        "farina",
        "durum",
        "semolina",
        "triticale",
        "malt",
        "malt extract",
        "malt flavoring",
        "modified food starch (wheat)",
        "brewer’s yeast"
      ]
    },
    {
      "name": "Soy Allergy",
      "prohibited_ingredients": [
        "soy",
        "soya",
        "soybean",
        "edamame",
        "soy lecithin",
        "miso",
        "natto",
        "shoyu",
        "tamari",
        "textured vegetable protein (TVP)",
        "tofu"
      ]
    }
  ]
}


Matching should be case-insensitive

Simple substring matching is acceptable for MVP

Prefer allergen fields from OpenFoodFacts when available; fallback to ingredient text

Decision Logic (Implement Exactly)

If any prohibited ingredient is found → UNSAFE

If ingredients or allergens are missing or empty → UNCERTAIN

If no matches found and data exists → SAFE

Each result must include:

Decision (SAFE | UNSAFE | UNCERTAIN)

List of matched ingredients (if any)

Short explanation string

Screens to Implement
1. Allergy Selection

List of 5 allergies

Single selection

Persist choice to localStorage

No illustrations, no marketing copy

2. Dashboard

Button: New Scan

List of past scans:

product name

timestamp

result badge

3. Scanner

Camera view using ZXing

Clear instruction text

Manual barcode input fallback

Graceful error handling

4. Result Screen

Clear result header

Explanation text

Matched ingredients (if any)

Raw ingredient snippet (collapsed by default)

Button to scan again

UX / UI Constraints

Mobile-first

Neutral color palette

Flat UI

No gradients, no glassmorphism

No animations beyond basic transitions

Large tap targets

One primary action per screen

Error Handling (Required)

Product not found

Network failure

Camera permission denied

Invalid barcode

Each error must show a human-readable message, not console errors.

Code Quality Expectations

Clear folder structure

Small, readable components

No dead code

No TODOs left unresolved

Comments only where logic is non-obvious

Deliverables

Fully working Next.js app

Instructions to run locally

Clear note on how to deploy to Vercel

No mock data — real OpenFoodFacts integration

Absolute Do-Nots

No authentication

No backend database

No Redux / Zustand / MobX

No AI explanations

No overengineering

Build the simplest thing that actually works and could be handed to real users tomorrow.