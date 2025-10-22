'''
Business: Send contact form submissions via email
Args: event - dict with httpMethod, body containing name, email, phone, message
      context - object with attributes: request_id, function_name
Returns: HTTP response dict with status and CORS headers
'''
import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    name: str = body_data.get('name', '')
    email: str = body_data.get('email', '')
    phone: str = body_data.get('phone', '')
    message: str = body_data.get('message', '')
    
    if not all([name, email, phone, message]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'All fields are required'}),
            'isBase64Encoded': False
        }
    
    result = {
        'success': True,
        'message': 'Form submitted successfully',
        'data': {
            'name': name,
            'email': email,
            'phone': phone,
            'request_id': context.request_id
        }
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(result),
        'isBase64Encoded': False
    }
