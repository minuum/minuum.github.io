#!/bin/bash
# -----------------------------------------------------------------------------
# Portfolio & Cover Letter PDF Generation and Organization Script
# -----------------------------------------------------------------------------
set -e

# Project paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
STYLE_FILE="$SCRIPT_DIR/style.html"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Make sure output directories exist
mkdir -p "$PROJECT_ROOT/final_submission/1_연세대_RLLAB" \
         "$PROJECT_ROOT/final_submission/2_고려대_ISR" \
         "$PROJECT_ROOT/final_submission/3_고려대_VAIL" \
         "$PROJECT_ROOT/final_submission/4_서강대_AI_Robotics" \
         "$PROJECT_ROOT/final_submission/5_성균관대_AMRL" \
         "$PROJECT_ROOT/final_submission/6_성균관대_LAIR" \
         "$PROJECT_ROOT/final_submission/7_KAIST_CLVR" \
         "$PROJECT_ROOT/final_submission/8_서울대_RLLAB" \
         "$PROJECT_ROOT/final_submission/9_한양대_CGR"

# Core conversion function
convert_to_pdf() {
    local md_file="$1"
    local pdf_dest="$2"
    local temp_html="${md_file%.md}.temp.html"
    
    echo "Processing: $md_file"
    # 1. Compile Markdown to HTML with embedded style
    /opt/homebrew/bin/pandoc -s -H "$STYLE_FILE" "$md_file" -o "$temp_html" --metadata title="Resume"
    
    # 2. Print HTML to PDF using headless Chrome
    "$CHROME" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$pdf_dest" "$temp_html"
    
    # 3. Cleanup temp file
    rm "$temp_html"
}

echo "=== Starting PDF Compilation and Organization ==="

# 1. Base Documents (Transcripts and General CV)
TRANSCRIPT="$PROJECT_ROOT/성적증명서_이민우_영어_260612.pdf"

# 2. Compile and copy to each lab folder
# --- 1. 연세대 RLLAB ---
echo "--- Organizing 1_연세대_RLLAB ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/1_연세대_RLLAB/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_RLLAB.md" "$PROJECT_ROOT/final_submission/1_연세대_RLLAB/CoverLetter_MinwooLee.pdf"
cp "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/1_연세대_RLLAB/CV_MinwooLee_EN.md"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/1_연세대_RLLAB/성적증명서_이민우_영어.pdf"
fi

# --- 2. 고려대 ISR ---
echo "--- Organizing 2_고려대_ISR ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/2_고려대_ISR/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_ISR.md" "$PROJECT_ROOT/final_submission/2_고려대_ISR/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/2_고려대_ISR/성적증명서_이민우_영어.pdf"
fi

# --- 3. 고려대 VAIL ---
echo "--- Organizing 3_고려대_VAIL ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/3_고려대_VAIL/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_VAIL.md" "$PROJECT_ROOT/final_submission/3_고려대_VAIL/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/3_고려대_VAIL/성적증명서_이민우_영어.pdf"
fi

# --- 4. 서강대 AI Robotics ---
echo "--- Organizing 4_서강대_AI_Robotics ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/4_서강대_AI_Robotics/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_AIRobotics.md" "$PROJECT_ROOT/final_submission/4_서강대_AI_Robotics/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/4_서강대_AI_Robotics/성적증명서_이민우_영어.pdf"
fi

# --- 5. 성균관대 AMRL ---
echo "--- Organizing 5_성균관대_AMRL ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/5_성균관대_AMRL/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_AMRL.md" "$PROJECT_ROOT/final_submission/5_성균관대_AMRL/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/5_성균관대_AMRL/성적증명서_이민우_영어.pdf"
fi

# --- 6. 성균관대 LAIR ---
echo "--- Organizing 6_성균관대_LAIR ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/6_성균관대_LAIR/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_LAIR.md" "$PROJECT_ROOT/final_submission/6_성균관대_LAIR/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/6_성균관대_LAIR/성적증명서_이민우_영어.pdf"
fi

# --- 7. KAIST CLVR ---
echo "--- Organizing 7_KAIST_CLVR ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/7_KAIST_CLVR/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_CLVR.md" "$PROJECT_ROOT/final_submission/7_KAIST_CLVR/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/7_KAIST_CLVR/성적증명서_이민우_영어.pdf"
fi

# --- 8. 서울대 RLLAB ---
echo "--- Organizing 8_서울대_RLLAB ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/8_서울대_RLLAB/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_RLLAB_SNU.md" "$PROJECT_ROOT/final_submission/8_서울대_RLLAB/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/8_서울대_RLLAB/성적증명서_이민우_영어.pdf"
fi

# --- 9. 한양대 CGR ---
echo "--- Organizing 9_한양대_CGR ---"
convert_to_pdf "$PROJECT_ROOT/CV_MinwooLee_EN.md" "$PROJECT_ROOT/final_submission/9_한양대_CGR/CV_MinwooLee.pdf"
convert_to_pdf "$PROJECT_ROOT/CoverLetter_MinwooLee_CGR.md" "$PROJECT_ROOT/final_submission/9_한양대_CGR/CoverLetter_MinwooLee.pdf"
if [ -f "$TRANSCRIPT" ]; then
    cp "$TRANSCRIPT" "$PROJECT_ROOT/final_submission/9_한양대_CGR/성적증명서_이민우_영어.pdf"
fi

echo "=== All files successfully organized in 'final_submission' ==="
