
from flask import Blueprint, request, jsonify
from database import get_db_connection

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/login", methods=["POST"])
def login():
    # Verificacion de credenciales
    data = request.get_json()
    user = data.get("usuario")
    password = data.get("contraseña")

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM usuarios WHERE usuario = %s AND contraseña = %s", (user, password))
    usuario = cursor.fetchone()

    cursor.close()
    conn.close()

    if usuario:
        return jsonify({"mensaje": "Inicio de sesión exitoso"}), 200

    return jsonify({"error": "Credenciales inválidas"}), 401
