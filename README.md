<h1>MEN OF GOD — CMS USER GUIDE</>

This guide explains how to create and manage content for the Men of God website using the CMS. It covers:

- Blog posts
- Episodes
- Pages
- Products
- Navigation
- Hosts

Hero system

Styling system

🧱 1. BLOG POSTS

Front Matter Fields

| Field | Description |
|---|---|
| `title` | Blog post title. |
| `date` | Publish date. |
| `author` |Name of the author. |
| `cover` | Featured image for the post. |
| `summary` | Short excerpt used in previews.|
| `comments` | Enable/disable comments. |
| `publish` | Controls visibility on the site. |
| `body` | Main content (rich text). |

Hero Behavior

Blog posts automatically use:

title

summary

cover (as hero background)

You can override with:

hero_title:
hero_subtitle:
hero_image:

🧱 2. EPISODES

Front Matter Fields

Field

Description

title

Episode title.

date

Release date.

author

Host or contributor.

cover

Episode artwork.

summary

Short description.

audio

MP3 URL.

video

YouTube ID.

publish

Controls visibility.

comments

Enable/disable comments.

body

Episode notes or transcript.

Hero Behavior

Episodes automatically use:

title

summary

cover

You can override with hero fields.

🧱 3. PAGES

Pages are the most flexible content type.

Front Matter Fields

Field

Description

title

Page title.

layout

Layout template.

permalink

Custom URL.

nav

Show in navigation.

nav_order

Navigation order.

body

Main content.

Hero Fields

Field

Description

hero_enabled

Turn hero on/off.

hero_title

Main hero title.

hero_subtitle

Subtitle/tagline.

hero_image

Background image.

hero_overlay_text

Scripture or mission statement.

hero_overlay_source

Attribution or reference.

hero_scripture_text

Bible verse.

hero_scripture_ref

Verse reference.

hero_cta

List of CTA buttons.

CTA Button Fields

Field

Description

label

Button text.

url

Link target.

style

primary or secondary.

🧱 4. PRODUCTS

Products include:

title

slug

price

cover image

gallery

Stripe + Printful IDs

summary

body

These fields power the store system.

🧱 5. NAVIGATION

Navigation items include:

title

url

order

visible

This controls the header menu.

🧱 6. HOSTS

Hosts include:

name

image

bio

visible

Used on the “About / Hosts” page.

🧱 7. USING THE STYLING SYSTEM

Your SCSS system is built around:

Rugged Palette

$rugged-accent
$rugged-dark
$rugged-light
$rugged-steel

Reusable Components

.mog-hero

.mog-hero-inner

.mog-hero-overlay

.mog-hero-scripture

.mog-hero-cta

.mog-btn

.mog-container

.mog-main

.mog-section

.mog-contact-*

How to use styling in content

Inside CMS rich text fields, you can apply classes like:

<div class="mog-section">
  <h2 class="mog-heading">Our Mission</h2>
  <p>We forge men of courage...</p>
</div>

Or add buttons:

<a href="/episodes/" class="mog-btn mog-btn-primary">Listen Now</a>

Or add scripture blocks:

<div class="mog-hero-overlay">
  <p>"Be strong and courageous."</p>
  <span>Joshua 1:9</span>
</div>
