import string
import datetime

now=datetime.datetime.now()

# Open a file
fo = open("E:\Programming\ScorpioApp\scorpioapp_desktop\Build_increment.h", "r+")
print ("Name of the file: ", fo.name)
print ("Date of Revision: ", now.day)
line = fo.readlines()
for idx, item in enumerate(line):
	if 'BUILD_INCREMENT' in item:
		tmp_str =  item.split();
		tmp_str[2] = str(int(tmp_str[2])+1)+"\n";
		item = ' '.join(tmp_str);
		line[idx] = item;   
	if 'BUILD_DATE' in item:
		tmp_str = item.split();
		tmp_str[2] = str(int(now.day))+"\n";
		item = ' '.join(tmp_str);
		line[idx] = item;   
fo.seek(0)

for idx, item in enumerate(line):
    fo.write(item)
fo.truncate()

# Close opend file
fo.close()