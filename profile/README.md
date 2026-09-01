<div align="center">

<img width="100%" alt="Mnemosyne OS, the sovereign memory OS. Everyone is building the intelligence. We build the relationship." src="assets/gen/hero.svg">

<br/><br/>

[![Download Infinity Edition](https://img.shields.io/badge/Download-Infinity_Edition_v1.4.3-111827?style=for-the-badge&logo=github)](https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS/releases/latest)
[![Documentation](https://img.shields.io/badge/📖_Read_the_guide-docs.mnemosyne--os.io-8b5cf6?style=for-the-badge&labelColor=0b1120)](https://docs.mnemosyne-os.io)
[![Audit the benchmark](https://img.shields.io/badge/🔍_Audit_the_77.1%25_strict-yourself-33ffd6?style=for-the-badge&labelColor=0b1120)](https://mnemosyne-os.github.io/MnemosyneOS---benchmarks/verification-kit/)

<br/>

![Windows](https://img.shields.io/badge/Windows-x64-0078d4?logo=windows&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-Apple_Silicon-000000?logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-deb_·_AppImage-fcc624?logo=linux&logoColor=black)
![Interface](https://img.shields.io/badge/interface-7_languages-a98bff)
![License](https://img.shields.io/badge/license-open--core-8b5cf6)

</div>

<h2><img width="100%" alt="01. Start here, three doors" src="assets/gen/band-start.svg"></h2>

| | | |
|---|---|---|
| 💿 **Use it** | Install the desktop OS, point it at your files, add cartridges from the built-in store. Windows, macOS, Linux. | [**Download v1.4.3**](https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS/releases/latest) · [User guide](https://docs.mnemosyne-os.io) |
| 🛠️ **Build on it** | The MnemoForge CLI, the developer SDKs, and seven cartridges whose full source sits in this organization. | [**The SDK**](https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS) · [Packages](https://mnemosyne-os.io/packages) |
| 🔬 **Check the claim** | 77.1% on LongMemEval-M under a strict judge, published with every question, every retrieved chunk and every verdict. | [**Open the verification kit**](https://mnemosyne-os.github.io/MnemosyneOS---benchmarks/verification-kit/) |

<div align="center">

<img width="100%" alt="77.1% on LongMemEval-M under a strict judge. Around 480 distractor sessions per question. 100% local, your memory never leaves your machine. 7 languages: EN, FR, ES, DE, PT, RU, ZH." src="assets/gen/strip-numbers.svg">

</div>

<h2><img width="100%" alt="02. What it is, one paragraph" src="assets/gen/band-what.svg"></h2>

Mem0, Zep and Letta hand *an agent* a memory service you wire into a cloud stack.
Mnemosyne OS is a desktop application, and the customer is you. It installs on your
machine, reads the files and conversations you point it at, and keeps them as durable,
searchable memory that any model you connect can draw on. Nothing is uploaded to run
it. Vaults partition memory by domain so nothing bleeds between them, retrieval ranks
your vault twice (by meaning and by exact words) and fuses the two rankings, a
navigable neural map shows what connects to what, and a dream state revisits old
material while you are away and writes down what it noticed. Encryption at rest is
there, armed by you. A human decides what is remembered, what is surfaced, and what is
forgotten.

**[→ The full tour, in the repository README](https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS#readme)**

<div align="center">
<br/>
<img src="assets/neural-map-torus.jpg" width="32%" alt="The neural map: memory rendered as a navigable topology" />
<img src="assets/mnemohub-store.jpg" width="32%" alt="MnemoHub, the cartridge store" />
<img src="assets/sovereign-notes.jpg" width="32%" alt="Sovereign notes: your files as durable memory" />
<br/>
</div>

<h2><img width="100%" alt="03. Your coding agent, the folder nothing indexes" src="assets/gen/band-agent.svg"></h2>

Claude Code, Cursor, Aider and Continue all keep what they learn in a folder whose name
starts with a dot: the deployment step that bites, the claim that must never be made flat,
the reason a library was picked over the obvious one. It is the half of a project that
lives nowhere else. It is also usually gitignored, so no wiki, no search and no repository
ever indexes it, and the next session starts without it.

Point a vault at that folder and it turns into memory any model you connect can retrieve.
What that removes is the second derivation. A conclusion your agent can look up is one it
never reaches twice, and a session that opens already knowing the project is a session that
opens on the work. We put no figure on that. Install it and read your own sessions.

| | | |
|---|---|---|
| 🧠 **What your agent wrote down** | A vault watches `.claude`, `.cursor`, `.aider` or `.continue` and keeps it searchable. Needs v1.4.3 or newer, the build where dot-directories stopped being skipped. | [**Connect your agent's memory**](https://docs.mnemosyne-os.io/developers/agent-memory) |
| 🔌 **What your agent asks back** | A Model Context Protocol server hands Claude Code, Cursor and Claude Desktop the vault tools, over a socket that never leaves your machine. | [**Connect Claude (MCP)**](https://docs.mnemosyne-os.io/connect-claude-mcp) |

<h2><img width="100%" alt="04. The organization, 14 public repositories" src="assets/gen/band-org.svg"></h2>

| Repository | What lives there |
|---|---|
| 💿 **[Mnemosyne-Neural-OS](https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS)** | The desktop app: documentation, the MnemoForge CLI, the developer SDKs, and every signed release for the three platforms. |
| 🔬 **[MnemosyneOS---benchmarks](https://github.com/Mnemosyne-OS/MnemosyneOS---benchmarks)** | The benchmark campaigns published whole: methodology, per-question verdicts, raw run logs, and a kit that re-derives every score in front of you. CC BY 4.0. |
| 🌐 **[mnemosyne-os.github.io](https://github.com/Mnemosyne-OS/mnemosyne-os.github.io)** | The organization on GitHub Pages: the product, the documentation, the open packages. |
| 🧷 **[agent-memory-skill](https://github.com/Mnemosyne-OS/agent-memory-skill)** | A skill for Claude Code: it indexes your agent's own memory directory into a vault, so its notes come back by meaning instead of being loaded in full every session. MIT. |
| 📄 **[.github](https://github.com/Mnemosyne-OS/.github)** | This page, and the generator that draws it. |

The nine remaining repositories are the cartridges below.

<h2><img width="100%" alt="05. The cartridges, 9 apps inside the OS" src="assets/gen/band-cartridges.svg"></h2>

Small apps that run *inside* the OS and share its memory. One click from MnemoHub, the
built-in store. Each one is a worked example of the SDK as much as a tool.

<div align="center">

<a href="https://github.com/Mnemosyne-OS/Muse"><img width="24%" alt="Muse: describe an app, get a real project on disk" src="assets/gen/card-muse.svg"></a>
<a href="https://github.com/Mnemosyne-OS/MnemoReader---MnemosyneOS"><img width="24%" alt="MnemoReader: a PDF library that reads itself aloud" src="assets/gen/card-reader.svg"></a>
<a href="https://github.com/Mnemosyne-OS/MnemoArchipel---Mnemosyne-OS"><img width="24%" alt="MnemoArchipel: a sovereign CRM for the people in your life" src="assets/gen/card-archipel.svg"></a>
<a href="https://github.com/Mnemosyne-OS/MnemoResto---MnemosyneOS"><img width="24%" alt="MnemoResto: the restaurant that forgets no guest" src="assets/gen/card-resto.svg"></a>

<a href="https://github.com/Mnemosyne-OS/Oikos"><img width="24%" alt="Oikos: your home, read into your own memory" src="assets/gen/card-oikos.svg"></a>
<a href="https://github.com/Mnemosyne-OS/mnemosyne_OS-translator"><img width="24%" alt="Translator: batch translation under your own key" src="assets/gen/card-translator.svg"></a>
<a href="https://github.com/Mnemosyne-OS/mnemosyne_OS-bmad"><img width="24%" alt="BMAD: an idea turned into a project blueprint" src="assets/gen/card-bmad.svg"></a>
<a href="https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS#readme"><img width="24%" alt="Yours: build a cartridge with the MnemoForge CLI" src="assets/gen/card-yours.svg"></a>

</div>

Oikos, MnemoReader and Translator are MIT. The other four carry the Mnemosyne cartridge
licence: read the source, adapt it for yourself, run it inside the OS. The surfaces you
extend are open, the memory engine is sealed.

<h2><img width="100%" alt="06. Psyche, the soul engine" src="assets/gen/band-psyche.svg"></h2>

Memory is half of the relationship. Psyche is the other half: a persistent personality
for your AI, character, voice and identity, forged by you in a guided ritual and
carried across conversations and across models. Change vendors, it comes with you.

Psyche ships inside Mnemosyne OS today. A standalone forge, for any agent anywhere, is
next.

**[→ psyche.mnemosyne-os.io](https://psyche.mnemosyne-os.io)**

<h2><img width="100%" alt="07. The proof, every run published" src="assets/gen/band-proof.svg"></h2>

Mnemosyne OS scores **77.1% on LongMemEval-M**, full-haystack, around 480 distractor
sessions per question, the variant nobody cites. That figure comes from a **strict**
judge, measured twice, verdict for verdict, and confirmed on 48 held-out questions with
zero retrieval regressions.

Under the **flexible** judge we used in July, the same build measures **81.3%**, and
July's own published floor of **72.9%** stays archived and citable exactly as it went
out. Two graders are two instruments, so their scores are reported side by side and
never chained into a progression. A number we improved on is not a number we delete.

Anyone can publish a percentage. We publish the ledger underneath it: every question,
every retrieved chunk, every judgement, plus a script that re-derives each score from
those raw results.

<div align="center">

**[→ Open the verification kit](https://mnemosyne-os.github.io/MnemosyneOS---benchmarks/verification-kit/)** · **[→ The August raw runs](https://github.com/Mnemosyne-OS/MnemosyneOS---benchmarks/tree/main/lexical-2026-08)**

</div>

<h2><img width="100%" alt="08. The lab, archived with a DOI" src="assets/gen/band-lab.svg"></h2>

Research is published whole, with permanent identifiers, including the hypotheses that
failed.

| Publication | |
|---|---|
| **The Resonance Engine**: *a multi-engine cognitive memory architecture for sovereign AI systems.* Whitepaper v2.1, CC BY 4.0. | [![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.21728283-1682D4)](https://doi.org/10.5281/zenodo.21728283) |
| **LongMemEval-M full-haystack verification kit**: *per-question ledgers and audit scripts.* CC BY 4.0 and MIT. | [![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.21727140-1682D4)](https://doi.org/10.5281/zenodo.21727140) |
| **Lab notes**: what we measured, and what was wrong. | [![Read](https://img.shields.io/badge/Read-mnemosyne--os.com%2Flabs-8b5cf6)](https://mnemosyne-os.com/labs) |
| **Author record**: the ORCID behind the deposits. | [![ORCID](https://img.shields.io/badge/ORCID-0009--0009--1087--3917-A6CE39?logo=orcid&logoColor=white)](https://orcid.org/0009-0009-1087-3917) |

<h2><img width="100%" alt="09. Where it lives, the official addresses" src="assets/gen/band-lives.svg"></h2>

Published by **XPACEGEMS LLC**. These are its official addresses.

| | |
|---|---|
| **Product** | [mnemosyne-os.io](https://mnemosyne-os.io) |
| **Company, press and labs** | [mnemosyne-os.com](https://mnemosyne-os.com) |
| **Documentation** | [docs.mnemosyne-os.io](https://docs.mnemosyne-os.io) |
| **Soul engine** | [psyche.mnemosyne-os.io](https://psyche.mnemosyne-os.io) |
| **Source and releases** | this organization |
| **Packages** | the npm scope `@mnemosyne_os`, [the list](https://mnemosyne-os.io/packages) |
| **Contact** | [dev@mnemosyne-os.io](mailto:dev@mnemosyne-os.io) |

The stories behind the numbers are on [the blog](https://mnemosyne-os.io/blog):
**[A multiplier cannot rescue a zero](https://mnemosyne-os.io/blog/a-multiplier-cannot-rescue-a-zero)** ·
**[72.9% and the three questions we miss](https://mnemosyne-os.io/blog/full-haystack-72-9)** ·
**[We gave personality control of memory. It cost 31 points.](https://mnemosyne-os.io/blog/personality-lens-31-points)** ·
**[Present is not the same as loadable](https://mnemosyne-os.io/blog/a-release-that-could-not-load-a-model)** ·
**[The memory my brain kept asking for](https://mnemosyne-os.io/blog/la-memoire-que-mon-cerveau-reclamait)**

<div align="center">

<br/>

<img width="100%" alt="Memory perceives, situates and reveals. The human governs." src="assets/gen/closer.svg">

<br/>

**[mnemosyne-os.io](https://mnemosyne-os.io)** · **[psyche.mnemosyne-os.io](https://psyche.mnemosyne-os.io)** · **[mnemosyne-os.com](https://mnemosyne-os.com)** · **[docs.mnemosyne-os.io](https://docs.mnemosyne-os.io)**

</div>
