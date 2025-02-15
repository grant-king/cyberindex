@group(0) @binding(0) var<uniform> grid: vec2f;

@vertex
fn vertexMain(@location(0) pos: vec2f) -> @builtin(position) vec4f {
    let cell = vec2f(1, 1);
    let cell_offset = cell / grid * 2;
    // very dense: 
    // pos / grid => centered square
    // pos + 1 / grid => corner-centered square
    // grid_pos = (pos + 1) / grid - 1 => aligned with grid location
    let grid_pos = (pos + 1) / grid - 1 + cell_offset; // aligned with grid at cell location
    return vec4f(grid_pos.x, grid_pos.y, 0, 1);
}