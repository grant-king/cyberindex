<template>
    <div class="bg-white/50 min-h-screen px-4">
        <div class="py-16">
            <div class="text-6xl">
                Welcome to Our Disco Tech!
            </div>
            <div>
                This is a multiplayer game that you can play on multiple screens, from multiple devices. No logins, jump right in!
            </div>
        </div>

        <div class="py-8">
            <RouterLink to="/game">
                <div class="text-4xl">
                    Collecting Voxels
                </div>
                <div>
                    You can collect any voxels by colliding with them in the 3D "Game" page.
                </div>
                <div>
                    Controls are like a simplified helicopter: W, A, S, D, Space, Ctrl, Mouse.
                </div>
                <div>
                    For left-handed mouse users, you can use the arrow keys with right Shift and Ctrl.
                </div>
                <div>
                    Mouse and keyboard are now supported. Gamepad controls coming soon.
                </div>
            </RouterLink>
        </div>

        <div class="py-8">
            <RouterLink to="/build">
                <div class="text-4xl">
                    Building Voxels
                </div>
                <div>
                    You can place voxels in the 2D "Build" page.
                </div>
            </RouterLink>
        </div>

        <div class="py-8">
            <div>
                Your contributions will continuously reshape the world for everyone!
            </div>
        </div>
    </div>
    <div class="text-xs text-white py-8 px-4">
        <div class="py-2">
            Note: This version is still very buggy. You may have to use the refresh button if things stall, and don't click the game link multiple times without refreshing.
        </div>
        <div class="py-2">
            Note: The back button might not do what you think it does, it will take you back to wherever you were before coming to this app.
        </div>
    </div>
</template>

<script setup>

</script>
