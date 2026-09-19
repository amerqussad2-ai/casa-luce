/**
 * next/og's ImageResponse renders in an isolated satori context that
 * cannot read CSS custom properties, so the approved palette tokens
 * (see src/app/globals.css) are duplicated here as plain hex values
 * for use in OG image / icon generation only.
 */
export const ogPalette = {
  warmIvory: "#F5F3EE",
  softWhite: "#FCFBF8",
  ink: "#171717",
  mutedGraphite: "#65635F",
  warmLine: "#DCD8D0",
  mutedCobalt: "#3556D8",
};
