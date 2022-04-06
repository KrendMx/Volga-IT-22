const one =
  " data:image/png;base64,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";
const two =
  " data:image/png;base64,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";
const three =
  " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAATCAYAAABBaynFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARCSURBVHgB5VlLctNAEH0j5wM7cwJ8A7yhil8VzoIirBAnCDlBkhMknCDhBIQTxOySYhGxIFDFAnMD5QRxdvlUNLwejWJHpaAZOVYEvCpbI3ukNz39mZ4ehT/g0WLYmU3QvQjQlvsAiGdOMIii/hB/OZ68CLtooSvtVoKhDjCcpmx18an8D71e2D67gxU23/LT0VQiO0XyH9sdpdFVCgPebn/d7X9EBTx9FW7yZV37znjuBGsugj1ZDD/I1bV/HpeyaaxS8javA6SyQGu0KWdvUtnq5Hv8MlwJFEJpJxqfvu31t2bGO4hHngL7JOrwNk6Ahe+7/Sj/Ik7sWypi43F6XWafGB6gML94WbW375yVo3HMCelUUebTxXDpTGOLTYk2A8q29n3vetl43bDyx6iAWvg0DrVCT5o0DGMQQfafKDPQ+FmmTMHBbn+bg1igt7b5gn15FtURO/dUGHJ8R/CEWDLHu515ydxpuWz8QObjoYTKhvK1GLbzvxmFikI4UftmAISLpcj/MlAZSAtYR0NhZFPGUwRxovCmzMNFNplkac/ada+pfHkE9mvJeqZg29XtZaASctFgUK6N8barbKafwnt4om6+PIxCdZoAGdA7vRZnCSV8/gsaCElKOKlL2f2F5ziZfG3pBM7rdd18RZh5thj2kpF34s5JmoX5QNYBNBCnc8wibZtGF/kmODZU9l37j/PJ2skkKIYHfPmKEIwrk4j/hT1mBhWM1iNO9DGmDTU2lwqHuAUE+E9QJTv25rBJZV18RZhBRcgmfyyRwuxJeTZXN7jfHSqF2lA3XxECrtyjNVOPLMwBX7gu9eznuJGhWo/2uFpPth1oJF8BgoPP/QEHkiqDIcN1YxuMFQRuK7yUYf4sLVkaKHQlC4UnfJ6pm68IgSW/3P9wYxtiysil5h24ghGEpS7n5Mbuk6Ps/nR+tD1zgRTUWYt1no88H59dhQekKOHDVwSjULP/yTxOY2VSKymDsWQbFcj73PU5KvM1ErUPD5jCh+ViJFl3lU0mV7ewA0+M8/nM5WW1bkIYhVrLWjADYdillWyWPZhcVUQED1i+d9KWEwcmWKWlQ+nD2vHwYG/nEzxgy2qGy8h2Fx/KnhElsK66I0lf4lNrtnws963VxZfHlZwssxKTvSr0eSSzlt+MC/n5PNbpLRJOpIi/fF3huQxywoBRHViO6Tbyx0hS+KBC1smD+QkyaTnVoMFuZgVzqbEWFRqEjxUeyeBxfoE3PyTHmJRvdNgR3ySfLQplXr0sBZ7CJJunBXJ+t5IpFulxl2j/PrO3NMZz3ZVQPWl2a055xDgSery6zAxj+dIpZyTlyKpGk+cSo6Gnv5aJlnfTMH9JZDKypRm7cH68KdmmyUc9bUGWIZhQG9EZllXJgHoczAPure7Zn2Ja0aCq1bogO4pjCXI4za2QyBakCVmHRnpEGY+TCuXBpvH9Brv3dZpJV2WOAAAAAElFTkSuQmCC";
const four =
  " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAxCAYAAAA2neyeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdjSURBVHgB7Vy7bhtHFL1L6sEgReQuCAx4DbhgZ7kwYMkOTBeOmcrrLxD1BZa/QNQXiPoCUV9guoqdFGKQWA6QwnLnIoAZIL3VBKEskZNzhjPU7HJJPWLtLpg9AKF9zM6dua+5M3NHIlOEO9XAv/0wWJQpQkGmCDMi/mxRApkiTJWAphG5gDKOXEAZRy6gjCMXUMYxIxnBvWpQ6SlZfPOq1ZBLBsNxaGbF3vdF2r+9bHUmfWPD999/au1LgsiMBfVEap7IiiSAUlcOlMg6Lrf58wZ/x4ICnSnKZrEoB5IwMiEgMkALx5NFXFfkktFutyigVXsP2pWlR8HauPJ4XwejmqdZ2WUgEwJy3U3BS2aiCWa3RcmWvYcQ1qko0XIQ3FO8U69ftnYkBWTDxSl5Orzuy0qlEixIApg7lDosqaNvPFmIujpj2TWMURuSElIX0LJdO1PGv4NRn0rJWNFprg73u54njTRcm0XqAlJFWSMTcDl0ISqhYIGgq1NKWvbeurrlarCOdr1Iy7VZZMHF3UcE93PfCzGpkpSbI+YPYUWOBReUPMdVbe4fqUvKSFVA0FKG1noOojUZ1/Yd3NyaJATj6k7GGUSTsKoGn0vKSFVADK37jmuDFr9wXifm5ghOkF0FYWidpBWPQ2oCop8HQ3wd7hrA1TSHrgbvkpgTufBcZRkEK5uSMlITkKcQqXkhixm4Gk+GSylJzYkIWoteXXDmRkAtaSWJIj0X58nTvpKRdbfQWJDgnOiwJA1a0N6r1prr6sCg7TRdXSqLpVwYhXAWYCHbd6ujRqLsBdzM4bzUcHWpC6gMVkD0JoRTM/RXYeFvSR+3PtrAdbtnkgJSsSAujNJS8Hc17hdyM548lkuEXt7BSgbC/Cf2GaNK15IxH1pLy9V5kjDoLjD4vt172bo+roxeXShCgw3munLlLCGvtkyQQN11OSOWqgEDk/24bQ682/VO1gk7aMetpEPvxC3ILOO0J5XZw55LEnMiMw9T4/agjnsht2ZdXaJIXEAjc59xcOdE7mLqZ8LQtU1YCDWbc6m6ukQFFDf3GYfQnAiD9edmTJEbdWdYCNXuUjmh/ymbezkmgGMQ3FZdpgh50kjGkQso48gFlHHkAso4cgFlHLmAcuTIkSNHjhw5cuTI8X9D0b3hbmen874bffZ1ufz11RvlhRtXy+K+t+/++uN9aJeR2wrRsuPqZ9no96fVH/2ebbM/SzeuDVH6vL9aLt/55kZZXBrRNo1r43n7cxpdl9e2L6GJKjNbovsuxyVZRKEPuPS5s4nl/O3oOzfh3Jxe+xBNgOc29qcvwqm0uqySt8vfB8/dZ7YNDu2xKA4OYNXZPv66JZ3oodO6Ps3LB5uRw3qPSif5Dcy9ZntmurLP4y9L3wWB2373KIq5r7h0WT6602v7A35sxvWHuFsNVshn0mV7eW/fmcyiuu3L37Pih7J60KmbXiF+S9pssrWXHwUfbz8MtoZHAZl4PkjssNvGPLLRVtEKClIzaVR1d1+fu5SqLw0K+aLHH0Gv8yayCci6lqrBYwiBCvUEfXv8+lVLJ6MY5tf2fhjmRTTlnEC7V9B3XySsdEw2wbtNMH4/mnivNyyVNJQ3zG1oR1O6on0ZWpDWIE+2JuWi6Y5hdzN0FNCTF0yssFoCRizGfWuT46OW1RP5U3dKZP1z/xsXNcgQCmChDezQDpkFLafmv5MLQp8b8rRijpwIZOIlhPCMgogeCDMH1TruLu5pSShDAcFyFrC92+S1yUULgS4BhXePenLLJdAfWEubWaB0Y8o5peB8y/r4zU7c0RJjOTuzRXle6Mm5kwTBjJukEWWWaecGhBRK3VKDw1ofJ9VZZH9Qp2l7FD6tw/ZbYvpDQZlTEqHv8PzgLH351rhcLSAjad+cKGvG5aKZRA8f1jPKQCZ4wPIwIARxe/wg+pW+QKPHHS0xp91EFc6fOQNtfkfliuY6kI7HMUzJgZuRAyvnaYYrk+rswXWzTqu0LigUw6udcR5nvitPtCKok/xu8OHAG4wvGhQCXOFuXF9++bGlFd1akN8fjDt+DwXimKgZr2TLk1EG6gQP0f5zZEA37uCKocGEwHZcGhVN/biHscI5r/pfAaGsUNPhXp+5GTna3Sq5LxcA8x5Ub8Crvjk+GXci0J7e8xwLM4kwC5a3RwVhelllEj0dJBQiyX4YXFcME+tuYWo5IyN21NVWNgZm2eBBrBgafqjuRxhnPJ1GVY8WZOCB9xc5D3rtnmH+YU8OWA/dBBioU7fYVgQ3W0w1BnNutXFPOoy2oOVbPbjVGU/8N0ZrJwEMvYZyw/EM9Vq33YyWtXRteij5hLF+lbwFD5sMXNRoSnGoL9qC5rrh3GeaZ98Q/BVEcH3dEoCQrpcGIaJ+Z10ahLBhr2fxPerUnbVlLeifUd8D04FO3Hu3fkt7HGYHbd04hjbz9+XRQKtJ33W3TIq3dC0daDSVwec3Vjj8HwosFxlnH9g2gV7oRIZxzavj+kO67jPSMfz2Gbi4kSv4vub2hcHYv397nnJneiWRAAAAAElFTkSuQmCC";
const five =
  " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAZCAYAAABTuCK5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATtSURBVHgB5VlNbttGGH1Dxz+7qieIcgN7UaB1WlhZtPYu7AlkncDOCSyfQMkJLJ8g8qouuhANtHaBLuKewMoJok0BS43IvkfOuDQluRJFqVbyAEnkaIacefzmfT80yIlKxS/dbqD0+3mrg0eOr/f8cvp84xbdIGh1MQc4XrL3SPNltvf8fbadhMALNgSjLpTq88yRzLY6f47S457v+W2e4+q89QKPCJpXxHVn202E68jgmnM+LsJ4vvre31z10IZBiae1y/NWU+3f7PoHBqirXXx5+FwQQVZXc58owmFo8CeP90lCW4RhRqytoEFiu38PsLV2i9bdHwaHfOiBNdrgCXKCF2jyJ+A2usYygGQ4y0uD0lOnFbZXV/CWErA1i+zwQZaMQfDHL63r+7dGmV/HV3Y35SbdbscOlhxaB4mvifj+Bg4hGcgJSlXJTNAvN+nTOFL15YJ8HpZpDR84ubPsOPX5uIHNJ3bn9NZRpSS8X+8jeOg+cpKzOkZt+e1dv8t57Uxy7eza3bmORbwbp3PXbmy7xuTWdJHIwTfZyCAL/d9fxw0JbFDXdqRvGkfncpjuJ8IpWW1OcrO3gXec5GvPw0uSL8290cKy1/52z6/oP43BjJAh0LHeu84KgwfO5W22r+Zq115Jn8cyEiW8iB/tHB3H1+f63Zi5O1Iv4qSpp2s9PFNUs36LLTkVTvBoXH8Sfian89t5q2ZCBGrvr5udbN8windPZ1zUNQ2MpJLWOOrh/hd+5f3pL/jM0OF1mjqW/+CnrmPbTdGMuedIyX55nNXyKX1hJhGrDGJZMdjk+Fdui+qX4eYpF1hx2+3eIIOLy59ad7vgkk5JW59PQ2HoWeYWehABCgDn2NUarRzMJYZ3SGv6yVizz0F4CjVu3SDdwPt0wjGdufhgqE1bPxzWW/5scmqvUQBIuCO6jDkHCHekK26Nkrh1CF6SWBxhSljrbmbbQ2Bn3BglK8ONbDOoaue4HWPnhAFwgSXDv6ST8Acy0jIKgBwfSdrnYXWacZybhLFhdT2WGJthBkWVIWyMvRAsJCPlQzuiLn9QdMLTp/wcTzNexMpJWV132DEFWrlJUnehgzlj7qQ/3/UbUMLh4VTpsSIYL4fzY2hwBqvr20zZFZ6FBTlRIUq0HIso4OVOjiaB5ITEKBI5ZkRSxyxItP5Aut7zUDEFhYoONISnUbSYksZcLT20zi4c4UynhSsgSdc9g5co0MoVCcU+wnwCpDu4lNhhEE2fQcZRiyyRuk6LlLwEKAjG1lvCCX3NIMTUCVQa8ya9o6+hNN3gAPlwQeIPlDkWESpKquRzTBJNDdXU+RDeqzSQzlLj/MBDAzNgrpouSWDdpUE5OOGLhHoUBwmousSI7Q0uqDZpsYr17xat5CDKFyqWGUXdpBv61nnyIb4Z5XN4nyYnXGUN5d13P/ivBh5KbDsySd5QRk54YWKNzcFgfOrr+qRlYmQbI4x0GCcySZRqLQr5mrbodaH6C4/fKDb+azWZ/McJ5uFq99OGipoXbP3/7sMsVwkhDePLdNkhDTnqKMSPegEyoOHEu4zzZh2pNmquqhlhtOw1w1QouqB0oBjYaKj90KvFZcBSva6z2WxnmQkX5qrpRcA5sd5aHJtXVbHEkuPRk27fOJ1IB+kPTq9+bhVSVfw/8ehJVwTEkLODRFY6+ATwDzVtWy12dvnhAAAAAElFTkSuQmCC";
const six =
  " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAATCAYAAABIgIm/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVVSURBVHgBxVlNcts2FH6klNgzXcQ3CH2CqovONElnKi1ae8mcwNIJ7Jwg0gksn8DyCUqtak8XVmdqpzNdRD2B2RNU3dmxRfR7/CsJgiRASsk3cSQBBPDhvYf3A1r9vrt3v0t71AB/XHp+Wd93h65DDbB7T6vFwluZjKnaw6bn28Qam+Tb5f9szCmI3ltEDhng9YG7Iou8gGgiK3O9pr2ujTktcskAn3aJ3hy4S8w7vbn0LgyGOuB/Lu/h0w6tYEzfVBmbCiYySTgLi5YqWZjMz3yh4H1dJVrJl9eH7hAf51LnDEIcZdu+/dHtdTt0gr6jtFHQ6jGgwZ+/ekt5ASj5H0yUszZscj+7SbZICMFVbGh2K61fBT71tqCP8npsZLe/eG/JEK9+cl3Lpp+zbeC4+HDpDZLfKnkIQdOdB5rUKYHHPuuArwQe/+HKe0casDNffJ0BrCRsYIidnKWNENgzm65ZEfLzOIHLujl5o1DUDMIZsDFkuoYwrDFpIjQKK8MrgSAXyu2TITo21Z6CRB4Qeipw7PkEBvlRJQ95LD4mcjuPZ+WSBmxqiOcPNM4JG0oE6RNqgfhU5t2moGMywPN7mgqFMeKEvKctAidmKhmf87CbP70qlPHFqT4lDTRWYOwefKlZy2oqIZ9YGIZJQhTz+q04LfXfHLpHtEUgBs5N16ziq+M1GiswXMTKuxhY0gtqiRJX7pAmWNlhPBJF182xpc6tbRqI98Oq/iq+kMV5Hd9WCgwkwVqacbQKa1E8xUita+NohsMYH7PAoreKztZu3hTxSXIq+scU8VUlLU4d38YKDDM0SYGBHL+awJJiHjJI3ZQ6seY0lRfKhOa4aY3aAo6qUeK7ECr5gW/VKWykwFAAthRkkf0xCWoB1FKnOaNAUhAI0kqnIwqRNSclSiHRih7as6RyaduwSxQY803rxp17nDYF34ed8gSsSxVAzOjl0njevKCvYSl9aZEz1FnarslGmox5V/8Pp5dYyxWZ+o3rraeA3iHV9nXmzFjzftLGJ/fVgTtB+2mebpQgtDU4XQSK0BLz/SGIlBiC+UIu7DVyCuOyAs/PVXwrFRgXxC/T3yL85+PbDH3/ioDuULBemF5VYUdHPDcrieOmiNby4t6/samFqXBDa+Y5RP4aDz953mOrGK9ZSAv6PPDlhvj0Lfh7zqWvwddGGJEuI8r4VioQgxY3BjchuuAEw0puXSz6C7cn3lNmk12DrJORyeTYXWld3fEpxOk8Ceu37cKXr9ZSvhTyHeae7qgnKfMarbLQFvDj66gLDtI4cdcgcpf88W8I91Q35U8zObjPsj+hsF42ok2WFQgvL0q45dCJYvDElK+qrKh2oVsGrs/GUNQKPr5w6xBfR/EV2KDurUcS+2qeG+G5u/wiaVkxpg0AMbxn5RpoeXOVv5D/HqcIiVkPXmhUw5djd19qdmS+X+oEpmAXFlucr+h2QPC66kZCzjzLsO2yAoYox1lfVYvyhT3Hag2+WmVFqsBAEXcCw1ikQskcuTbeTHyRrSrYQyUiOyuk0pnTp1V/hmWFjJZlBXMIyx+8/srMeYY7zsIrLK6dOYN/XCsMSYGwrFDwxSlMPZbF2nzapd5a8S4txhiZ0fxW8aqoCryxDqwFbkVVXvhQyuh3RaaJ10/TQjEfI3lNw98lzhN2x1SBZJ8cX0seGbMhsNA1ZFLkhj1BiXO4R09ONOT5+M1FXfKkwxdGctbNvBkeiZIn19QIzjq63J2rOoOYpFyC3F55XPN4yhkzAeYp+kg5q+aSEY8ZlPXzS2j+1JFJZszqq0fyNdcexSVTLd8Mh0HVM/8Bz1OdtkBi0AwAAAAASUVORK5CYII=";
const seven =
  " data:image/png;base64,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";
const eight =
  " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAZCAYAAAAG2cHnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT+SURBVHgB7VpRcts2EF1ITKqZflQ5gekTxPnoTON0JspHa/cPOUGiE8Q+gZUTyD6BpROE+XPaDzMfqTvTj7gnCHsD5c9WaqJvKUAGGVIiSKaNPXwzFAkI2F3uYoHlAuKHXemThd4FzcIwmFEFDAayf9Gjfh6dLJ8qKJLN5tsUbUPzj5MgogbA719Ht6vgCaJjXANTcdmjELcn5IhHO3I8F7TX0eV5j4a4TVj4Lngoi0dVgCY93JGHZ2+CfVO3vSsP5kSjDtUD0watKMa7s+FQlqB5zHVK0RF4HlIF8PtDv6e4fFu3eI8XAvpa091PfhXNSFCu8SHboQflvrSNyM9gPMCLhFQSrEjQyRUI9EYpA0IgVSBQEYR5GX7Gi0O+1yzfw5+lRNXIbgteETnApg3wgDvAfWjXgecYnjmp4kV6APt2nTZs+UEhklnms5kGdEPo8rWXKGNXhhlD8ouEVAJ6mhwV/Y/RvKGscizoqcsAYUC+CWR6ZspC0RbLJzrJ3cbk7CQYkgNYfsj4YSlfRuEGmFoTnuQIpicydSIGrfTUEd29oAdVp9qEFHtjion2xjIEhDEgexiPDH3FxR4RkSNEpo8QhevfW3IET52qgkx1gMGXlX9aZ630+KeqN+ppIfEQeNiDpoKAFm5YOnUVbxTX0+ikNeD/h6UR2RtVxvO0N+Yi5YWZAdDiv4VnF1wi1dYLG8WzR7vy8bpGV4ia83SdMmLZtbH1wsbhq4KouAy8bEUZb2y9sFlA51Nck3XtinTt5TRc6Y0/wqBx64WNgj+hzhy/nW3kZqtWRarKBDuCjlov/DqQa8SiSBXptec6hRbFyiFt1OKLojBvnOeNqBzr4rSGF/rkCpWfoVHqsxysT18IHSW+owoQqsTuiqi3A+MV/ZG3NmpmnOmfUEmg7d927pB3BhBOh+QAGEumK8T7xY3OM3nJAx2qR7SOpqCPPJuUHoxCHYK2JDdw1Lk0EGT9yHdOSaa8R9GL7V/khlDkmnoL350EU7Gqhb2NsuQX09OzX4OASuL7n+SW16VXoiEv4WkeQcATU84mx6vQAo0PRj6b/vaOfA/Nb1ETgIHs1CSWphGtSKaUJqtoX5RpyFs+nLRFpj2okqjVOx28W+BTDfAIzks8lE3WZ3F1RbM/fwvOi4zI4EHY7dab7pjPt58oyuquCdpAVMqItx2rjHgT4FGLQuQd0eA6vrNX2c9Ffezyqr5FvOxjJ9n129C4FUasc34HCvDzNoL5uMmlINnBWob1awue+pyDiHmP9vC8gSZDPsKhFuvx4sgFPHqO9vi/jz7EG71cz5vOUPi9+Td0TKz7gdz81KNXtAgQpyleO5JPEuwlvO4kG8rmi4DXUd9sHvPnHniNeZP9RhsxL/ByRZwpC7OxjICG1xpEsX0o9Wj+D/1F62Xx0S+iRXT81ngWR/kw+Bhz9YAj6uQZxozNMZA0r6nhFXdpBsP21fUniK89k72XjR1wjHCjjWiOOTS1Mw9FTn8/CUb8rGlyMBahcP9ul+6jfI6LTwLwrsOpTlpzu+S03GUPQQa8qbOINB4joAk0Lc5Hn4LBhPOkybOdd1agK6553ekmn1TnWqh+R/NQmk9W7httRP2pU/pzxwUw5tCepo3yBEf1i8NePichELUnXqPXtk27DyLSpA97C+o3rXXyns3r3ZtgH3Uv7eOeul9k07TXREyrbcbsNuFfzrJ5gwgpL60AAAAASUVORK5CYII=";
const nine =
  " data:image/png;base64,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";
const ten =
  " data:image/png;base64,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";
const eleven =
  "data:image/png;base64,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";
const twelve =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAOCAYAAAAFWA8aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARcSURBVHgB7VlNctNIFP5kM2RmhTlBzAnizVRNwlThLGbiWU3PCcacIPYJEp8g5gQxJ0CscGARUfwkVSxIToA4AWZHAlHzvXa30wjJlhTIyl9VopbU/f769fuRAyyxhMWfHdX+Mh3Gx+MwDrDEEsRGR3V1gklQQ0NrNFbOMKphiSWmaMo/cYwgQXT+K9TSOZaYQdcYOQJMUEcrAaIbEk4gXhPQYzRumUnAezObz8x9gnc6wGPJQz6xeWs/XyB88yw8Sc/jhIn/fv1vpRjKWpn8jQhYlXt6cfRyHEZZSl1Fhz86qknaXcfLzA3w0cnpaDi6icbp0UE4/FH8PRq7vgxlaGTytzqQ3rtX4/ChPPv9L9X6pQ41o8n34gSkF/E6qgP39FQG/U3Nsd5RI978L+PX4zDwjcebff61GXL6acN4iu0Y4wF35hmAtHfz3mXRMPw19ujRivyH5N9HDubpUNN4RK1beTpYGbQdDtJyWho9Gn3taBxuVuXPW7HBADm421GHFKLNYcx5d3waJHgYTMN/Lo2NLfXW8olpx82svRBbizPk7ZPDwrRiPch4HjdoG9cMo4Ce8e+J96MkDA2eOEujtA7ttmoIjdcHYY+2iFESslZbGxK7stEoCX8fhIbIlDXv5hk29VRGiYiHaV4SZYo4hqBQzWE9Gc7A147AhlqGwXrdC/cloG3BhUsDF4IY9/w37Lp7GnaAKpieZkFcZGOy4OkQR1GYaQd5znnfOIhzJDrGTlKC/42shy7/CYJpHpKQ1n31JCxl2KqoMUJQhonlv8pUIHlylAQYFFUsV4fxYh3Ib820dszfTGldrjtx767Cn8PBzU8YFllPT2h8R0PjNgcLaYiMdOpNyi4ppnm+gkOmqyHrpY/HB9l1WxYynSOdb42huDlk0L0A7lf1/KKgEkPHQ7z+bAWnNM6ehDkqXchB0jqsb6keDTXa+Ecp0u/Po8EC+T3nRBcJGizgbsMrEovC5+8VvTtsEVepUz/v5F8Kgcl3NALS0NimPaTo7M9bbh3kP4kcErWoT2tevZaFQmmFQo4o1ImkFy4o5vk/CGJEU0Bqc3rlFO+jAoSGCbWMQnVb+OaC6UuMK92UbFCiLyOHQDoslICpVy43uksH6aEkZjSkI2FkNc6+GLEbcM0pSqLwdw7T/8LkvVvpd2yxfOM18XMQGzmuQJ9hdtoSwkSDwqBjPXBjU+DVqhXmtg6Q6z1UhW2xGUXW8JOx0DkkrNNLt117xev99Jyjp2FIoR9YgvsbqY5CDHp3S+2lnKgUyPe5HTTKrhUdpBiz3wukxSt9cgXy24O0k6iIWddXQQcP11L3CQL7Eaphiq9gdqJib06T7z6wvz89Hs8vZlxulZNBA0zMhxgYo8R57RPXSKpqZvFn4RX6udkWif9KiOR1It//5f1VdLAyt908+SdzAyu7T8MN/A9Lgnn8M3XgtxDSeO7TsR+ykKZR5+8dL+TwecijUUQn261EKICv1WyB9FyiWPEAAAAASUVORK5CYII=";

export {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
};