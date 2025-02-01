"""
This script watches the frontend directory for changes and runs the build command and rename script when a change is detected.
"""

import os
import time
import subprocess

# Define the directories to watch and the command to run
current_dir = os.path.dirname(os.path.abspath(__file__))
# build path to parent directory
watch_dir = os.path.join(current_dir, os.pardir, 'vue_frontend', 'vue-project')
build_cmd = 'npm run build'
rename_cmd = 'python update_index.py'

# Define the function to run the command
def run_command(cmd, cwd=watch_dir):
    print(f'Running command: {cmd} in directory: {cwd}')
    subprocess.call(cmd, shell=True, cwd=cwd)

def get_all_files(directory):
    files = []
    for filename in os.listdir(directory):
        if os.path.isdir(os.path.join(directory, filename)):
            files.extend(get_all_files(os.path.join(directory, filename)))
        else:
            files.append(os.path.join(directory, filename))
    return files

# Define the function to watch the directory
def watch_directory():
    # Get the initial file list and their modification times
    files = {f: os.path.getmtime(os.path.join(watch_dir, f)) for f in get_all_files(watch_dir)}
    # Start the loop
    while True:
        # Wait for 1 second
        time.sleep(1)
        # Get the current file list and their modification times
        current_files = {f: os.path.getmtime(os.path.join(watch_dir, f)) for f in get_all_files(watch_dir)}
        # Check if the file list has changed
        if current_files != files:
            print('::::::::::::::::Detected change in files::::::::::::::::')
            # Update the file list
            files = current_files
            # Run the build command
            run_command(build_cmd, watch_dir)
            # Run the rename command
            run_command(rename_cmd, current_dir)


if __name__ == '__main__':
    # Call the watch_directory function
    watch_directory()