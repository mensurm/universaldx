__author__ = 'Mensur'

from app import app

#change Python default encoding to UTF8, Python 2.x is infamous for problems with unicode strings
import sys
reload(sys)
sys.setdefaultencoding('UTF8')

app.run(host='0.0.0.0', port=80, debug=True)

