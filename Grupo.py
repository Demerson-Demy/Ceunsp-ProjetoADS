import sqlite3

conector = sqlite3.connect("vendas1.db")
cursor = conector.cursor()

#TABELA grupo (Roupas, Acessorios)
cursor.execute("""
CREATE TABLE grupo (
        Cd_grupo INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        Gr_nome INTERGER (30) NOT NULL,
        FOREIGN KEY (Gr_nome) REFERENCES acessorio(Nome)
        FOREIGN KEY (Gr_nome) REFERENCES roupas(Roupatipo)
        

);
""")

conector.commit()
cursor.close()
conector.close()

print("Abra a pasta do programa e veja se o arquivo esta lá")
print("Fim do Programa")