import json
import http.client
import os
from types import SimpleNamespace
from enum import Enum

# Monta o link da execução do pipeline no bitbucket
build_number = os.getenv('BITBUCKET_BUILD_NUMBER')
pipeline_status = os.getenv('BITBUCKET_EXIT_CODE')
pipeline_link = f"https://bitbucket.org/test/pipelines/results/{build_number}"
  
# Monta e envia mensagem para Discord
message = f"""
### Test results 
**Status:** {"Sucesso :white_check_mark:" if pipeline_status == "0" else "Error :x:"}
**[Acesse o Pipeline]({pipeline_link})**
"""

discord_conn = http.client.HTTPSConnection("discord.com")
payload = f"{{\'content\':\'{message}\'}}"

headers = {
  'Content-Type': 'application/json',
}

payload = json.dumps({
  "content": f"{message}"
})

# Envia webhook para discord
discord_conn.request("POST", "/api/webhooks/hash-do-webhook-do-discord", payload, headers)
res = discord_conn.getresponse()

# Fecha conexões
discord_conn.close()