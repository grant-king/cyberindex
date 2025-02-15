struct VertexInput {
    @location(0) pos: vec2f,
    @builtin(instance_index) instance: u32,
};

struct VertexOutput {
    @builtin(position) pos: vec4f,
    @location(0) cell: vec2f,
};

@group(0) @binding(0) var<uniform> grid: vec2f;

@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
    // cast to float as shader operating on floats
    let idx = f32(input.instance); 
    // compute cell coordinate from instance_index
    let cell = vec2f(idx % grid.x, floor(idx / grid.x));
    let cell_offset = cell / grid * 2;
    // very dense: 
    // pos / grid => centered square
    // pos + 1 / grid => corner-centered square
    // grid_pos = (pos + 1) / grid - 1 => aligned with grid location
    let grid_pos = (input.pos + 1) / grid - 1 + cell_offset; // aligned with grid at cell location
    var output: VertexOutput;
    output.pos = vec4f(grid_pos.x, grid_pos.y, 0, 1);
    output.cell = cell;
    return output;
}