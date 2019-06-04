---
layout: post
title: '라즈베리파이[라즈비안]에 LAMP서버 구축하기'
author: 'KCPIT'
categories: Raspberry-Pi
tags:
- IoT-Board
- Raspberry-Pi
- Server
-
---


<script> location.href='https://cafe.naver.com/develoid/815693' ; </script>

<p>서버를 구축하기 위한 방법중 하나가 LAMP구축인데 LAMP서버 구축하는 방법을 알아봅시다.[cui기준으로 작성되었고, 오타가 있으시면 댓글로 알려주시면 감사하겠습니다.]처음엔터미널에 들어가 패키지 업데이트부터 해줍시다.sudo apt-get updatesudo apt-get upgrade이제 아파치를 설치해봅시다.-아파치 설치-sudo apt-get install apache2생각보다 간단하죠?php도 설치해봅시다.php5와 php7 둘중에 하나 선택해서 설치합시다.-php5 설치-sudo apt-get install php-php7 설치-sudo apt-get install php7.0만약 php7을 쓰고싶은데 실수로 php5 하고 php7 둘다깔았으면...?기존 php5 제거sudo apt-get remove php5-commonphp7 설치sudo apt-get install php7.0이제 mysql설치해봅시다.-mysql 설치-sudo apt-get install mysql-server mysql-client마지막으로 phpmyadmin을 설치해봅시다. phpmyadmin은 패키지로 설치하니 오류가 매우 많아, 인터넷에서 받아서 진행하겠습니다.-phpmyadmin 설치-wget <a href="https://files.phpmyadmin.net/phpMyAdmin/4.8.2/phpMyAdmin-4.8.2-all-languages.zip">https://files.phpmyadmin.net/phpMyAdmin/4.8.2/phpMyAdmin-4.8.2-all-languages.zip</a>sudo unzip /home/pi/phpMyAdmin-4.8.2-all-languages.zip -d /var/wwwsudo ln -s /var/www/phpMyAdmin-4.8.2-all-languages /var/www/html/phpmyadmin phpmyadmin은 오류가 매우 많은데 여러가지 오류들을 해결해봅시다.Phpmyadmin 오류해결-mbstring php extension 을 찾을 수 없거나 multibyte charset 을 사용한 것 같습니다. mbstring php extension 이 없다면 phpmyadmin 에서 문자열을 정확하게 나눌 수 없으며 이로 인해 예상하지 못한 결과가 발생 할 수 있습니다.ㄴsudo apt-get install php-mbstring-이제 설정 파일은 암호화 문자열(blowfish_secret)을 필요로 합니다.1.phpmyadmin폴더에있는 config.sample.inc.php를 config.inc.php로 변경2.$cfg['blowfish_secret'] = ''; /* YOU MUST FILL IN THIS FOR COOKIE AUTH! */에 작은 따옴표안에<a href="http://www.passwordtool.hu/blowfish-password-hash-generator">http://www.passwordtool.hu/blowfish-password-hash-generator</a>암호 넣기-The $cfg[‘TempDir’] (./tmp/) is not accessible. phpMyAdmin is not able to cache templates and will be slow because of this.$ mkdir /var/www/phpMyAdmin-4.8.2-all-languages/tmp$ sudo chgrp www-data /var/www/phpMyAdmin-4.8.2-all-languages/tmp$ sudo chmod 774 /var/www/phpMyAdmin-4.8.2-all-languages/tmp인터넷에서 localhost를 가보시면 서버가 생성되 있을겁니다!</p>

