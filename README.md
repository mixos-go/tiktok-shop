# tiktok-shop — TikTok Shop OpenAPI skill

Skill mandiri ala pola `@tts-open-toolkit`/`tts-openapi-*` dari TikTok Shop. Struktur
identik dengan skill toolkit lain:

```
tiktok-shop/
├── SKILL.md          # name + description, workflow, output shape, references
├── agents/
│   └── openai.yaml   # interface config (display_name, short_description, default_prompt)
└── references/
    └── api/          # 25 kategori, 363 API doc (clean Markdown)
        ├── product/
        ├── order/
        ├── fulfillment/
        ├── return_refund/
        ├── logistics/
        └── ...
```

## Cara pakai (untuk agent/LLM)

Salin ke direktori skills coding-agent (mis. `.codex/skills/` atau
`.claude/skills/`), atau set langsung sebagai skill. Saat ada pertanyaan API TikTok
Shop, skill `tiktok-shop-api-guide` memandu inspect `references/api/**` lalu
cross-check ke Partner Center docv2 bila perlu.

## Update / regenerasi

Konten `references/api/` adalah **snapshot statis** dari OpenAPI spec resmi di dalam
package `@tts-open-toolkit/cli`. Untuk memperbarui:

```
npm install -g @tts-open-toolkit/cli
# ekstrak spec oas dari package, lalu:
python tools/oas_to_markdown.py \
  --spec <tts oas dir> \
  --outdir tiktok-shop/references/api
```

Tidak perlu mengedit manual satu-satu.
