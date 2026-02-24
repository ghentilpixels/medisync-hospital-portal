<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/5639c2b4-342f-42ae-80d8-b0f84ac83892

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies (using either npm or yarn):
   - `npm install`
   - or `yarn install` (a `yarn.lock` is provided)
2. Remove `package-lock.json` if you switch to yarn to avoid conflicts.
3. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
4. Run the app:
   - with npm: `npm run dev`
   - with yarn: `yarn dev`
