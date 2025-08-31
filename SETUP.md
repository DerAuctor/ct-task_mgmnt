# 🜄 Cipher Setup Guide 🜄

## 🜄 Ziel 🜄
Vollständige Konfiguration von Cipher für produktive Nutzung mit PostgreSQL, Vector Storage und MCP-Integration.

## 🜄 Aktuelle Konfiguration 🜄

### **✅ Abgeschlossen**
- [x] Build erfolgreich (TypeScript-Fehler behoben)
- [x] PostgreSQL-Verbindung konfiguriert 
- [x] SSL-Zertifikat für sichere DB-Verbindung
- [x] OpenRouter + Mistral API konfiguriert
- [x] Qwen API backup konfiguriert
- [x] Agent-Konfiguration (`memAgent/cipher.yml`)
- [x] Umgebungsvariablen (`.env`)
- [x] Globale Installation (`npm link`)

### **⚠️ Erkannt: DB-Verbindung**
PostgreSQL-Verbindung schlägt fehl → fällt zurück auf In-Memory.
```
ERROR: Failed to connect to PostgreSQL database
WARN: [StorageManager:Database] Primary backend failed, attempting fallback to in-memory
```

## 🜄 Nächste Schritte 🜄

### **1. Datenbank-Debug (Priorität: Hoch)**
```bash
# Test PostgreSQL-Verbindung direkt
psql "postgres://avnadmin:YOUR_PASSWORD@pg-e0ff634-ct-cipher.i.aivencloud.com:25686/defaultdb?sslmode=require"

# Oder mit SSL-Zertifikat
PGSSLROOTCERT=./ca-certificate.crt psql "postgres://..."
```

### **2. Vector Storage Setup**
```bash
# .env anpassen für persistente Vectore
VECTOR_STORE_TYPE=qdrant
VECTOR_STORE_URL=https://your-cluster.qdrant.io
VECTOR_STORE_API_KEY=your-qdrant-api-key
```

### **3. MCP-Integration für IDEs** 
```json
// Claude Desktop/Code config
{
  "mcpServers": {
    "cipher": {
      "type": "stdio",
      "command": "cipher", 
      "args": ["--mode", "mcp"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-...",
        "CIPHER_PG_URL": "postgres://..."
      }
    }
  }
}
```

## 🜄 Nutzung 🜄

### **Verschiedene Modi**
```bash
# Interaktiv
cipher

# MCP Server (für IDEs)
cipher --mode mcp

# API Server + WebSocket
cipher --mode api --port 3001

# Web UI
cipher --mode ui --port 3000
```

### **Features verfügbar**
- ✅ LLM-Conversation (OpenRouter/Mistral)
- ✅ MCP Tools (Filesystem) 
- ✅ WebSocket Events
- ✅ Session Management
- ⚠️ Memory Storage (In-Memory Fallback)
- ❌ Vector Storage (nicht konfiguriert)
- ❌ Knowledge Graph (deaktiviert)

## 🜄 Risiken 🜄
- **Datenverlust**: In-Memory Storage → Sessions gehen bei Neustart verloren
- **Performance**: Ohne Vector Store → keine semantische Suche in Memory
- **Skalierung**: Filesystem MCP → begrenzte Tool-Palette

## 🜄 Aufgaben 🜄
- [ ] PostgreSQL-Verbindung debuggen und reparieren
- [ ] Qdrant Vector Store einrichten
- [ ] Weitere MCP-Server integrieren (Git, Web-Search)
- [ ] Backup-Strategie für produktive Daten
- [ ] Performance-Monitoring einrichten