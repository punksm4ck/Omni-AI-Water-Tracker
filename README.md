# Omni-AI Water Tracker 🏊💧

A lightweight, precision Chrome extension that calculates and visualizes the estimated water consumption of your AI sessions in real-time.

## Supported Platforms
This v3.0 deployment tracks the top 10 AI chatbots globally:
1. Google Gemini
2. OpenAI ChatGPT
3. Anthropic Claude
4. Microsoft Copilot
5. DeepSeek
6. Perplexity AI
7. Meta AI
8. Mistral Le Chat
9. Poe
10. xAI Grok

## The Metric
Generative AI requires significant cooling for its data centers. This tracker operates on the metric that **100 words generated consumes approximately 16oz of water**.

The widget dynamically converts your session's total word count into the fractional volume of an **Olympic-sized swimming pool** (84,535,040 fluid ounces), displaying the environmental footprint natively within the UI.

## Enterprise Telemetry
This v4.0 deployment includes a comprehensive environmental dashboard tracking four core metrics:
1. **Olympic Pool Capacity:** Micro-fractional tracking down to 10 decimal places.
2. **Fluid Ounces:** Direct volume metric based on 16oz per 100 words.
3. **Carbon Footprint:** Tracks estimated CO2e emissions (2g per 100 words).
4. **Session Word Count:** Raw integer extraction.

## Features
- **Real-Time Visual Extraction:** Surgically parses text directly from the rendered DOM, bypassing hidden Shadow DOM duplication for 100% accurate counting.
- **Universal Architecture:** Platform-agnostic extraction allows seamless tracking across entirely different web frameworks.
- **High-Fidelity Math:** Calculates consumption down to the 10th decimal place to seamlessly capture micro-updates as the AI streams text.

## License
This project is licensed under the MIT License.

