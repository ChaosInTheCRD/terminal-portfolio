import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
╭━━━┳╮╱╭┳━━━┳━━━┳━━━┳━━┳━╮╱╭┳━━━━┳╮╱╭┳━━━┳━━━┳━━━┳━━━╮
┃╭━╮┃┃╱┃┃╭━╮┃╭━╮┃╭━╮┣┫┣┫┃╰╮┃┃╭╮╭╮┃┃╱┃┃╭━━┫╭━╮┃╭━╮┣╮╭╮┃
┃┃╱╰┫╰━╯┃┃╱┃┃┃╱┃┃╰━━╮┃┃┃╭╮╰╯┣╯┃┃╰┫╰━╯┃╰━━┫┃╱╰┫╰━╯┃┃┃┃┃
┃┃╱╭┫╭━╮┃╰━╯┃┃╱┃┣━━╮┃┃┃┃┃╰╮┃┃╱┃┃╱┃╭━╮┃╭━━┫┃╱╭┫╭╮╭╯┃┃┃┃
┃╰━╯┃┃╱┃┃╭━╮┃╰━╯┃╰━╯┣┫┣┫┃╱┃┃┃╱┃┃╱┃┃╱┃┃╰━━┫╰━╯┃┃┃╰┳╯╰╯┣╮
╰━━━┻╯╱╰┻╯╱╰┻━━━┻━━━┻━━┻╯╱╰━╯╱╰╯╱╰╯╱╰┻━━━┻━━━┻╯╰━┻━━━┻╯
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

╭━━━┳╮╱╭┳━━━┳━━━┳━━━╮
┃╭━╮┃┃╱┃┃╭━╮┃╭━╮┃╭━╮┃
┃┃╱╰┫╰━╯┃┃╱┃┃┃╱┃┃╰━━╮
┃┃╱╭┫╭━╮┃╰━╯┃┃╱┃┣━━╮┃
┃╰━╯┃┃╱┃┃╭━╮┃╰━╯┃╰━╯┃
╰━━━┻╯╱╰┻╯╱╰┻━━━┻━━━╯
╭━━┳━╮╱╭┳━━━━┳╮╱╭┳━━━╮
╰┫┣┫┃╰╮┃┃╭╮╭╮┃┃╱┃┃╭━━╯
╱┃┃┃╭╮╰╯┣╯┃┃╰┫╰━╯┃╰━━╮
╱┃┃┃┃╰╮┃┃╱┃┃╱┃╭━╮┃╭━━╯
╭┫┣┫┃╱┃┃┃╱┃┃╱┃┃╱┃┃╰━━╮
╰━━┻╯╱╰━╯╱╰╯╱╰╯╱╰┻━━━╯
    ╭━━━┳━━━┳━━━╮
    ┃╭━╮┃╭━╮┣╮╭╮┃
    ┃┃╱╰┫╰━╯┃┃┃┃┃
    ┃┃╱╭┫╭╮╭╯┃┃┃┃
    ┃╰━╯┃┃┃╰┳╯╰╯┣╮
    ╰━━━┻╯╰━┻━━━┻╯
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my personal website 😀</div>
        <Seperator>----</Seperator>
        <div>
          Please check out my{" "}
          <Link href="https://github.com/chaosinthecrd">
            GitHub
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>` or `<Cmd>ls</Cmd>.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                             WNK00000KNW                                  
             WNNWW         WXOO0Odddddx0W                                 
         WNKOkxxkO0XW      NOONKxxkkkxddK                                 
        N0xddddddddxOX     Xk0Xxoxkkkxdd0W                                
       W0ddddddddddddxKW   KoxOooxkkkxll0                                 
     NOxooodddddddddddxX   0lodldxkkxo:oK                                 
     W0doollooddddddddokXN NOolldkkxxlckN                                 
      WKdooolloddddddlldx0X0koldxxxOKKKN                                  
       WKxoooolodddddolllddolloddx0W                                      
         NOdooooxOkxdlclooollloooOW                                       
          WKkoooxKNKxlloolclodddxK                                        
            WKkooxKKdoolllldddddkN                                        
  WNXKKKKXNW  WKkddollollloddddxKW                                        
WKkxddddddxkOXW N0xoodddddoloddON                                         
W0dddddddddddxkK0xxxkkkxxdodxxxkk0XNW                                     
 W0xdddddddddddddodxkkxoloxkkxddoloxON                                    
  WXkdddddddddddddodxxoooxOKX0dloooooOW                                   
    WKkxdddddddddddkKkok000OkxollccccokKXXXXXXNNNW                        
 WX000Okdoodxxxxxxxk0kddddolllccllloooodxxxxdxxxxON                       
 Xkxkkkkxxdxk0KXNNNKxdollllloodddddddddddddddddxkOX                       
 WXK0Okxkkxkxxk0KX0kxdolcccldddddddddddddddxO0KNWW                        
     WXK0OkkxxkkxxxkxdoolllloddddddddxxkOKXNW                             
    WNXK0OkxxxkOOOOOkdooddxk0K0kxddxk0NW                                  
  WKOxddddddddxk0NWWXkx0NNNNK0OkxxxxxkX                                   
 NOddddddddddddddkKXOdxk00OkxxkkkkkkxON                                   
W0ddddddddddddddxdooodxkkkkkkkkkkxxdxKW                                   
 WX0OkxxxxxxkOOkxdllclodddxxkkkOOkxkO00KN                                 
     WNNNXXNNWXxoollllllllx000KXNNW WWWNW                                 
           WNXOolooooolc:clolokOOOX                                       
         N0xolc::cllcc:::::::coxO0N                                       
       NOdc:::::::::::cc::cc::::cldKW                                     
       0l:::::::c::cc:c::cc:c:::c:coK                                     
      Nxc:::::ccc:c::cccccccc::::::cxN                                    
     WOl:::ldO0kxl:coxkkOOkoc::::c::ckW                                   
    W0l:::lO0K000kocdOOOO0K0d::::::::l0W                                  
    Xo::::okkxkkOOdcllldxkO0xc:::::::cdX                                  
    0l:cc::c::ccodl::c:cccllccccc:cc::l0                                  
    0c;;;;;;;;;;;;;;;;;;;;;;,,;;::;::;lOW                                 
   Xo'....'..'''......'....''',,;;;;:cclOW                                
  No'..'.'''''''''''''''''',;;;;;:::cclllOW                               
 Nx;'',,,,'',''''',,,,,,,,;;;;;;:::::::ccckN                              
 Kdlllllc::::::::::::::::::::::::::clllcccdX                              
 NKKKKKKK000000OOO0000000000000000KKKKKKKKXW                              
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
