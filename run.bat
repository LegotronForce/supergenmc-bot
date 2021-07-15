rem                 SuperGenMC
rem             Discord Bot Runner
rem              By Nightowl2007W                                    
rem            (And LegotronForce)

@echo off
:filename
rem		sets file name then starts bot
set file=%RANDOM%-%RANDOM%-%RANDOM%.log
goto start

:checkifnode
if exist node_modules\ (
  goto start
) else (
  goto get_node_files
)

:start
rem		makes log in /logs then starts bot
cls
echo Bot is starting
node . >logs/%file%
goto filename

:get_node_files
npm i
goto start