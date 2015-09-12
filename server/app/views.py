from app import app
from flask import request, redirect, url_for, render_template, jsonify, Response
from os import environ
import json
import requests

@app.route('/api/send-contact-us-form/', methods=['GET', 'POST'])
def send_contact_form():
    if request.method == 'POST':
        json_response = json.loads(request.data)
        first_name = json_response['first_name']
        last_name = json_response['last_name']
        email = json_response['email']
        message = json_response['message']
        subject = str(first_name) + ' just filled the contact form on SanyamKhurana.net'
        requests.post(
            environ['MAIL_URI'],
            auth=("api", environ['API_KEY']),
            data={"from": environ['MAIL_FROM'],
                  "to": environ['MAIL_TO'],
                  "subject": subject,
                  "text": first_name + ' ' + last_name + ' with mail id: ' + email + ' just filled the' + \
                          ' contact form on SanyamKhurana.net with message: ' + message})
        return Response(json.dumps({"Message": "Thanks for filling up the form! I'll get back to you ASAP."}), status=200,
                            content_type="application/json")
    return Response(json.dumps({"Message": "There was some problem recording your response. Please try again later or consider shooting a mail directly."}), status=400,
                        content_type="application/json")